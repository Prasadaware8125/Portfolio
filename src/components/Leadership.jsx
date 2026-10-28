import React from 'react';
import { Crown, Trophy, CheckCircle2, Zap } from 'lucide-react';

export default function Leadership() {
  const leadershipData = {
    title: "Team Leader — Team AgriNova",
    project: "KrishiSakhi (AI-Powered Smart Farming Platform)",
    achievement: "2nd Place (Team Runner-Up) — Techathon 1.0",
    event: "State-Level Technical Event",
    responsibilities: [
      "Coordinated team members and aligned individual responsibilities with core project objectives",
      "Distributed technical and design tasks based on individual strengths",
      "Tracked overall project milestones and delivery timelines under competition deadlines",
      "Coordinated feature integration between mobile frontend and ML backend services",
      "Led final project demonstration and presentation to expert judges"
    ]
  };

  return (
    <section id="leadership" className="py-16 border-b border-slate-800/80 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-2">
            <Crown size={13} />
            <span>LEADERSHIP & INITIATIVE</span>
          </div>
          <h2 className="text-3xl font-bold text-slate-100 tracking-tight">
            Leadership & Team Coordination
          </h2>
          <p className="text-sm text-slate-400 max-w-lg mt-1">
            Demonstrated team leadership, task delegation, and decision-making under hackathon deadline pressure.
          </p>
        </div>

        {/* Leadership Card */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl p-6 sm:p-8 border border-amber-500/30 hover:border-amber-500/50 transition-all duration-300 relative overflow-hidden group shadow-xl">
            
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 mb-6 border-b border-slate-800">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  <Crown size={13} /> {leadershipData.title}
                </div>
                <h3 className="text-2xl font-extrabold text-slate-100 mt-2">
                  {leadershipData.project}
                </h3>
                <p className="text-xs text-slate-400">
                  {leadershipData.event}
                </p>
              </div>

              <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/40 rounded-xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400">
                  <Trophy size={22} />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-amber-300">Hackathon Rank</div>
                  <div className="text-sm font-bold text-slate-100">
                    {leadershipData.achievement}
                  </div>
                </div>
              </div>
            </div>

            {/* Leadership Responsibilities */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                <Zap size={14} className="text-amber-400" />
                <span>Leadership Impact & Execution</span>
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {leadershipData.responsibilities.map((resp, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 bg-slate-900/80 p-3.5 rounded-xl border border-slate-800/80 text-xs text-slate-300"
                  >
                    <CheckCircle2 size={14} className="text-amber-400 flex-shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
