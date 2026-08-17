import React from 'react';
import { User, Target, Sparkles, CheckCircle } from 'lucide-react';
import { focusAreas, personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-20 border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-sky-500/10 text-sky-400 border border-sky-500/20 mb-3">
            <User size={13} />
            <span>BACKGROUND & DRIVE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight">
            About Me
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-sky-500 to-indigo-600 rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main About Text */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 leading-relaxed text-base">
            <p>
              I am a <strong className="text-slate-100">Bachelor of Technology student in Information Technology</strong> at <strong className="text-slate-100">Walchand Institute of Technology, Solapur</strong>, with an outstanding academic record of <strong className="text-sky-400 font-mono">9.48/10 CGPA</strong> and expected graduation in <strong className="text-slate-100">June 2027</strong>.
            </p>

            <p>
              My technical foundation revolves around <strong className="text-slate-100">Java, Data Structures & Algorithms</strong>, and modern full-stack web architectures. Having solved <strong className="text-sky-400 font-mono">300+ DSA problems</strong>, I focus heavily on writing clean, efficient, and well-structured code that scales.
            </p>

            <p>
              I actively build practical end-to-end applications using <strong className="text-slate-100">React.js, Node.js, Express.js, and MongoDB</strong>. In addition to technical execution, I have demonstrated leadership capabilities as <strong className="text-slate-100">Team Leader for Team AgriNova</strong>, securing <strong className="text-amber-400">2nd Place in Techathon 1.0</strong> (a state-level technical event).
            </p>

            <p>
              I am actively seeking <strong className="text-sky-400 font-semibold">Software Engineering Internships and Full-Time SDE opportunities</strong> where I can contribute to real-world software systems, solve complex engineering challenges, and collaborate with high-performing engineering teams.
            </p>
          </div>

          {/* Right Column: Focus Areas & Career Targets */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Currently Focused On Box */}
            <div className="glass-card rounded-2xl p-6 border border-slate-800">
              <h3 className="text-base font-semibold text-slate-100 mb-4 flex items-center gap-2">
                <Target size={18} className="text-sky-400" />
                <span>Currently Focused On</span>
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {focusAreas.map((area, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-900/90 text-slate-200 border border-slate-700/80 hover:border-sky-500/50 transition-colors"
                  >
                    <CheckCircle size={12} className="text-sky-400" />
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Primary Career Targets Box */}
            <div className="glass-card rounded-2xl p-6 border border-slate-800">
              <h3 className="text-base font-semibold text-slate-100 mb-3 flex items-center gap-2">
                <Sparkles size={18} className="text-indigo-400" />
                <span>Target Engineering Roles</span>
              </h3>
              
              <ul className="grid grid-cols-2 gap-2 text-xs font-medium text-slate-300">
                {personalInfo.targetRoles.map((role, idx) => (
                  <li key={idx} className="flex items-center gap-2 bg-slate-900/50 p-2 rounded-lg border border-slate-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                    <span>{role}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
