"use client";
import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { Session } from '@supabase/supabase-js';

interface Progress {
  [moduleId: string]: {
    completedSections: string[];
    quizScores: { [quizId: string]: number };
  };
}

interface CourseContextType {
  progress: Progress;
  loading: boolean;
  updateSectionProgress: (moduleId: string, sectionId: string, completed: boolean) => void;
  saveQuizScore: (moduleId: string, quizId: string, score: number) => void;
}

const CourseContext = createContext<CourseContextType | undefined>(undefined);

export const CourseProvider = ({ children }: { children: ReactNode }) => {
  const [progress, setProgress] = useState<Progress>({});
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState<Session | null>(null);

  const fetchProgress = useCallback(async () => {
    if (!session) return;
    setLoading(true);
    const { data, error } = await supabase
      .from('user_progress')
      .select('*')
      .eq('user_id', session.user.id)
      .single();

    if (error) {
      console.error('Error fetching progress:', error);
    }

    if (data) {
      setProgress(data.progress);
    } else {
      setProgress({});
    }
    setLoading(false);
  }, [session]);

  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);
    };
    getSession();

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (session) {
      fetchProgress();
    } else {
      setLoading(false);
    }
  }, [session, fetchProgress]);

  const updateProgress = async (newProgress: Progress) => {
    if (!session) return;
    const { error } = await supabase
      .from('user_progress')
      .upsert({ user_id: session.user.id, progress: newProgress }, { onConflict: 'user_id' });

    if (error) {
      console.error('Error updating progress:', error);
    } else {
      setProgress(newProgress);
    }
  };

  const updateSectionProgress = (moduleId: string, sectionId: string, completed: boolean) => {
    const newProgress = { ...progress };
    if (!newProgress[moduleId]) {
      newProgress[moduleId] = { completedSections: [], quizScores: {} };
    }
    if (completed && !newProgress[moduleId].completedSections.includes(sectionId)) {
      newProgress[moduleId].completedSections.push(sectionId);
      updateProgress(newProgress);
    }
  };

  const saveQuizScore = (moduleId: string, quizId: string, score: number) => {
    const newProgress = { ...progress };
    if (!newProgress[moduleId]) {
      newProgress[moduleId] = { completedSections: [], quizScores: {} };
    }
    newProgress[moduleId].quizScores[quizId] = score;
    updateProgress(newProgress);
  };

  return (
    <CourseContext.Provider value={{ progress, loading, updateSectionProgress, saveQuizScore }}>
      {children}
    </CourseContext.Provider>
  );
};

export const useCourse = () => {
  const context = useContext(CourseContext);
  if (context === undefined) {
    throw new Error('useCourse must be used within a CourseProvider');
  }
  return context;
};