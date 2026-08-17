import React from 'react';
import { Code, Layout, Server, Database, Cpu, Wrench } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const categoryIcons = {
  Code: Code,
  Layout: Layout,
  Server: Server,
  Database: Database,
  Cpu: Cpu,
  Wrench: Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-sky-500/10 text-sky-400 border border-sky-500/20 mb-3">
            <Cpu size={13} />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight">
            Technical Skills
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mt-2">
            Structured view of core programming languages, modern web frameworks, databases, core CS concepts, and developer tooling.
          </p>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((cat, idx) => {
            const IconComponent = categoryIcons[cat.icon] || Code;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 border border-slate-800 hover:border-sky-500/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:scale-110 group-hover:bg-sky-500/20 transition-all duration-300">
                      <IconComponent size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-100 group-hover:text-sky-300 transition-colors">
                      {cat.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-slate-900/90 text-slate-200 border border-slate-800 hover:border-sky-500/50 hover:bg-slate-800 hover:text-white transition-all duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>{cat.skills.length} competencies</span>
                  <span className="text-sky-400">Verified</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
