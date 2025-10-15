import { getModuleById, Module } from '@/app/data/course-data';
import { notFound } from 'next/navigation';

interface ModulePageProps {
  params: {
    id: string;
  };
}

const ModulePage = async ({ params }: ModulePageProps) => {
  const moduleData: Module | null = await getModuleById(params.id);

  if (!moduleData) {
    notFound();
  }

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold">{moduleData.title}</h1>
      <p className="text-lg mt-4">{moduleData.description}</p>
    </div>
  );
};

export default ModulePage;