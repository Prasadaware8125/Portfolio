import React from 'react';
import { Trophy, BrainCircuit, Award } from 'lucide-react';
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
            Verified competitive programming milestones, hackathon awards, and problem-solving metrics.
          </p>
        </div>

        {/* Achievements Grid: 4 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

                  <div className="text-xs font-mono text-slate-400 mb-1">
                    {item.organization}
                  </div>

                  <h3 className="text-lg font-bold text-slate-100 mb-1">
                    {item.title}
                  </h3>

                  <div className="text-base font-extrabold text-sky-400 font-mono mb-3">
                    {item.award}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="text-emerald-400 font-medium">Verified</span>
                  <span>Competition</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
