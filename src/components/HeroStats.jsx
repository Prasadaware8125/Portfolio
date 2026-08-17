import React from 'react';
import { GraduationCap, Code2, Trophy, Calendar } from 'lucide-react';
import { heroStats } from '../data/portfolioData';

const iconMap = {
  GraduationCap: GraduationCap,
  Code2: Code2,
  Trophy: Trophy,
  Calendar: Calendar,
};

export default function HeroStats() {
  return (
    <section className="py-8 bg-slate-900/40 border-y border-slate-800/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {heroStats.map((stat, idx) => {
            const IconComponent = iconMap[stat.icon] || Code2;
            return (
              <div
                key={idx}
                className="glass-card rounded-xl p-4 sm:p-5 flex items-center gap-4 border border-slate-800 hover:border-sky-500/30 transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 flex-shrink-0">
                  <IconComponent size={22} />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-slate-100 font-mono tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400 font-medium mt-0.5">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
