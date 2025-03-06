import {
  BriefcaseBusiness,
  Contact as ContactIco,
  House,
  UserRound,
} from 'lucide-react';

import HeroSection from './_components/HeroSection';
import Skills from './_components/Skills';
import ProjectsSection from './_components/ProjectsSection';
import Footer from './_components/Footer';
import { Navbar } from './_components/ui/Navbar';

const navItems = [
  { name: 'Home', link: '#home', icon: <House /> },
  { name: 'Work', link: '#work', icon: <BriefcaseBusiness /> },
  { name: 'About', link: '#about', icon: <UserRound /> },
  { name: 'Contact', link: '#contact', icon: <ContactIco /> },
];

const Homepage = () => {
  return (
    <main className="flex flex-col px-5 sm:px-10 relative">
      <div className="max-w-7xl mx-auto w-full">
        <Navbar navItems={navItems} />
        <HeroSection />
        <Skills />
        <ProjectsSection />
        <Footer />
      </div>
    </main>
  );
};

export default Homepage;
