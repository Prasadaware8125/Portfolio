import React from 'react';
import { Trophy, BrainCircuit, Award, CheckCircle } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

const achievementIconMap = {
  Trophy: Trophy,
  BrainCircuit: BrainCircuit,
  Award: Award,
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-sky-500/10 text-sky-400 border border-sky-500/20 mb-3">
            <Trophy size={13} />
            <span>HONORS & RECOGNITION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight">
            Key Achievements
          </h2>
          <p className="text-sm text-slate-400 max-w-lg mt-2">
            Verified competitive milestones, hackathon awards, and consistent problem-solving dedication.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievementsData.map((item) => {
            const IconComponent = achievementIconMap[item.icon] || Award;
            return (
              <div
                key={item.id}
                className="glass-card rounded-2xl p-6 border border-slate-800 hover:border-sky-500/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 mb-5 group-hover:scale-110 group-hover:bg-sky-500/20 transition-all duration-300">
                    <IconComponent size={24} />
                  </div>

                  <h3 className="text-lg font-bold text-slate-100 mb-1">
                    {item.title}
                  </h3>

                  <div className="text-base font-extrabold text-sky-400 font-mono mb-3">
                    {item.award}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {item.role && (
                  <div className="pt-3 border-t border-slate-800/80">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono bg-amber-500/10 text-amber-300 border border-amber-500/20">
                      <CheckCircle size={11} /> {item.role}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
