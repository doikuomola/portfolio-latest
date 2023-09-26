import Intro from '@/components/intro';
import Projects from '@/components/projects';
import Skills from '@/components/skills';
import SectionDivider from '../components/section-divider';
import About from '@/components/about';
import Experience from '@/components/experience';
import Contact from '@/components/contact';

export default function Home() {
  return (
    <main className="flex items-center flex-col px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
