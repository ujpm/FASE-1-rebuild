import Link from 'next/link';
import { getFeaturedModules, Module } from '@/app/data/course-data';

const FeaturedModules = async () => {
  const featuredModules: Module[] = await getFeaturedModules();

  return (
    <section className="py-12 bg-gray-50" id="training">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Training Modules</h2>
          <Link
            href="/training"
            className="text-blue-600 hover:text-blue-800"
          >
            View All Modules
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredModules.map((module) => (
            <div
              key={module.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center text-white">
                    <i className={`fas ${module.icon} fa-2x`}></i>
                  </div>
                  <h3 className="text-xl font-bold ml-4">{module.title}</h3>
                </div>
                <p className="text-gray-600">{module.description}</p>
                <div className="mt-4 flex justify-between text-sm text-gray-500">
                  <span>
                    <i className="fas fa-clock mr-1"></i> {module.duration}
                  </span>
                  <span>
                    <i className="fas fa-layer-group mr-1"></i>{' '}
                    {module.difficulty}
                  </span>
                </div>
              </div>
              <div className="bg-gray-100 p-4">
                <Link
                  href={`/modules/${module.id}`}
                  className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Start Module
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedModules;