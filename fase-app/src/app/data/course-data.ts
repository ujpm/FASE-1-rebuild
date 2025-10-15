import { supabase } from '@/lib/supabaseClient';

export interface Module {
  id: string;
  title: string;
  description: string;
  icon: string;
  duration: string;
  difficulty: string;
}

export async function getFeaturedModules(): Promise<Module[]> {
  const { data, error } = await supabase
    .from('modules')
    .select('*')
    .limit(3);

  if (error) {
    console.error('Error fetching featured modules:', error);
    return [];
  }

  return data as Module[];
}

export async function getAllModules(): Promise<Module[]> {
  const { data, error } = await supabase.from('modules').select('*');

  if (error) {
    console.error('Error fetching all modules:', error);
    return [];
  }

  return data as Module[];
}

export async function getModuleById(id: string): Promise<Module | null> {
  const { data, error } = await supabase
    .from('modules')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error(`Error fetching module with id ${id}:`, error);
    return null;
  }

  return data as Module | null;
}