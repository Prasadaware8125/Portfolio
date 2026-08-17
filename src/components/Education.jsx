import React from 'react';
import { GraduationCap, Calendar, Award, MapPin, BookOpen } from 'lucide-react';
import { education } from '../data/portfolioData';

export default function Education() {
  return (
    <section className="py-16 border-b border-slate-800/80 bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-sky-500/10 text-sky-400 border border-sky-500/20 mb-2">
            <GraduationCap size={13} />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl font-bold text-slate-100 tracking-tight">
            Education
          </h2>
        </div>

        {/* Education Card */}
        <div className="max-w-3xl mx-auto">
          <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 hover:border-sky-500/40 transition-all duration-300 relative overflow-hidden group">
            
            {/* Ambient subtle glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6 pb-6 border-b border-slate-800">
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-slate-100 group-hover:text-sky-300 transition-colors">
                  {education.institution}
                </h3>
                <div className="text-sm font-semibold text-sky-400">
                  {education.degree}
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400 mt-1">
                  <MapPin size={13} className="text-slate-400" />
                  <span>Solapur, Maharashtra, India</span>
                </div>
              </div>

              <div className="flex flex-col sm:items-end gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-800 text-slate-200 border border-slate-700">
                  <Calendar size={13} className="text-sky-400" />
                  {education.period}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Award size={13} />
                  CGPA: {education.cgpa}
                </span>
              </div>
            </div>

            {/* Expected Graduation Callout */}
            <div className="bg-sky-500/10 border border-sky-500/20 rounded-xl p-4 mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 font-bold">
                  <BookOpen size={18} />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-sky-300">Degree Status</div>
                  <div className="text-sm font-bold text-slate-100">
                    Expected Graduation: <span className="text-sky-400 font-mono">June 2027</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Academic Highlights */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Key Academic Highlights</h4>
              <ul className="space-y-2">
                {education.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 flex-shrink-0" />
                    <span>{item}</span>
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
