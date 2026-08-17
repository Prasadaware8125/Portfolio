import React from 'react';
import { Briefcase, Calendar, Building2, CheckCircle2, ShieldAlert } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-sky-500/10 text-sky-400 border border-sky-500/20 mb-3">
            <Briefcase size={13} />
            <span>PRACTICAL INTERNSHIPS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight">
            Professional Experience
          </h2>
        </div>

        {/* Experience Timeline Card */}
        <div className="max-w-3xl mx-auto">
          {experienceData.map((exp, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 hover:border-sky-500/40 transition-all duration-300 relative group"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6 pb-6 border-b border-slate-800">
                <div className="space-y-1">
                  <div className="flex items-center gap-2.5">
                    <h3 className="text-xl font-bold text-slate-100 group-hover:text-sky-300 transition-colors">
                      {exp.role}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {exp.type}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-300">
                    <Building2 size={15} className="text-sky-400" />
                    <span>{exp.company}</span>
                  </div>

                  <p className="text-xs text-sky-400 font-medium">
                    {exp.partner}
                  </p>
                </div>

                <div className="flex-shrink-0">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-900 text-slate-300 border border-slate-700">
                    <Calendar size={13} className="text-sky-400" />
                    {exp.period}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {exp.description}
              </p>

              {/* Key Deliverables & Learning Highlights */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                  Key Deliverables & Learning Focus
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {exp.highlights.map((highlight, hIdx) => (
                    <div
                      key={hIdx}
                      className="flex items-center gap-2.5 bg-slate-900/80 p-3 rounded-xl border border-slate-800 text-xs text-slate-200"
                    >
                      <CheckCircle2 size={14} className="text-emerald-400 flex-shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
