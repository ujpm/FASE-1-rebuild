import Hero from '@/components/Hero';
import FeaturedModules from '@/components/FeaturedModules';
import Stats from '@/components/Stats';
import About from '@/components/About';
import FAQ from '@/components/FAQ';

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedModules />
      <Stats />
      <About />
      <FAQ />
    </div>
  );
}