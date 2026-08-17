import React from 'react';
import { BrainCircuit, Code2, Award, CheckCircle2, Flame, Layers } from 'lucide-react';

export default function ProblemSolving() {
  return (
    <section className="py-16 border-b border-slate-800/80 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-card rounded-3xl p-8 sm:p-10 border border-slate-800 hover:border-sky-500/40 transition-all duration-300 relative overflow-hidden">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute top-1/2 right-10 -translate-y-1/2 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-sky-500/10 text-sky-400 border border-sky-500/20">
                <BrainCircuit size={14} />
                <span>ALGORITHMIC EFFICIENCY</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
                Problem Solving & DSA
              </h2>

              <p className="text-base text-slate-300 leading-relaxed max-w-2xl">
                Regular practice in <strong className="text-slate-100">Data Structures & Algorithms</strong> with a focus on improving algorithmic thinking, space-time complexity analysis, problem solving, and robust <strong className="text-sky-400">Java programming</strong>.
              </p>

              {/* Streaks & Badges Info */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-mono font-semibold bg-slate-900/90 text-amber-400 border border-amber-500/30">
                  <Flame size={15} /> 1 × 100-Day Streak Badge
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-mono font-semibold bg-slate-900/90 text-sky-400 border border-sky-500/30">
                  <Award size={15} /> 2 × 50-Day Streak Badges
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-mono font-semibold bg-slate-900/90 text-emerald-400 border border-emerald-500/30">
                  <Code2 size={15} /> Java (Primary Language)
                </div>
              </div>
            </div>

            {/* Right Big Stat Box */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-6 sm:p-8 rounded-2xl border border-sky-500/30 text-center space-y-2 w-full max-w-xs shadow-2xl">
                <div className="text-4xl sm:text-5xl font-black text-sky-400 font-mono tracking-tight">
                  300+
                </div>
                <div className="text-sm font-bold text-slate-200 uppercase tracking-wider">
                  Problems Solved
                </div>
                <p className="text-xs text-slate-400 pt-2 border-t border-slate-800">
                  Across Competitive Platforms & LeetCode Practice
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
