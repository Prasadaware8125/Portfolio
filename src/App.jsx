import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HeroStats from './components/HeroStats';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Leadership from './components/Leadership';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import GitHubSection from './components/GitHubSection';
import ProblemSolving from './components/ProblemSolving';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 font-sans selection:bg-sky-500 selection:text-slate-950 relative">
      {/* Background Subtle Grid Overlay */}
      <div className="fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-10" />

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Layout */}
      <main>
        <Hero />
        <HeroStats />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Leadership />
        <Achievements />
        <Certifications />
        <GitHubSection />
        <ProblemSolving />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
