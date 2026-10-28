import React from 'react';
import { GraduationCap, Calendar, Award, MapPin, BookOpen, School } from 'lucide-react';
import { educationList } from '../data/portfolioData';

export default function Education() {
  const primaryEdu = educationList.find((e) => e.isPrimary) || educationList[0];
  const secondaryEdu = educationList.filter((e) => !e.isPrimary);

  return (
    <section id="education" className="py-20 border-b border-slate-800/80 bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-sky-500/10 text-sky-400 border border-sky-500/20 mb-3">
            <GraduationCap size={13} />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight">
            Education
          </h2>
          <p className="text-sm text-slate-400 max-w-lg mt-2">
            Academic qualifications highlighting technical undergraduate studies, engineering minor, and schooling.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          
          {/* Primary Undergraduate Degree Card */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 hover:border-sky-500/40 transition-all duration-300 relative overflow-hidden group shadow-xl">
            {/* Ambient subtle glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6 pb-6 border-b border-slate-800">
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20">
                  <BookOpen size={11} /> Primary Degree
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-100 group-hover:text-sky-300 transition-colors">
                  {primaryEdu.institution}
                </h3>
                <div className="text-sm sm:text-base font-semibold text-sky-400">
                  {primaryEdu.degree}
                </div>
                {primaryEdu.minor && (
                  <div className="text-xs sm:text-sm font-medium text-indigo-300">
                    {primaryEdu.minor}
                  </div>
                )}
                <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
                  <MapPin size={13} className="text-slate-400" />
                  <span>Solapur, Maharashtra, India</span>
                </div>
              </div>

              <div className="flex flex-col sm:items-end gap-2 flex-shrink-0">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-800 text-slate-200 border border-slate-700">
                  <Calendar size={13} className="text-sky-400" />
                  {primaryEdu.period}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Award size={13} />
                  CGPA: {primaryEdu.cgpa}
                </span>
              </div>
            </div>

            {/* Expected Graduation Callout */}
            <div className="bg-sky-500/10 border border-sky-500/20 rounded-xl p-4 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 font-bold flex-shrink-0">
                  <GraduationCap size={18} />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-sky-300">Degree Status</div>
                  <div className="text-sm font-bold text-slate-100">
                    Expected Graduation: <span className="text-sky-400 font-mono">{primaryEdu.expectedGraduation}</span>
                  </div>
                </div>
              </div>
              <span className="text-xs font-mono text-slate-300 bg-slate-900/80 px-3 py-1 rounded-lg border border-slate-800">
                Solapur University
              </span>
            </div>

            {/* Academic Highlights */}
            {primaryEdu.highlights && (
              <div className="space-y-2.5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                  Academic Highlights & Coursework
                </h4>
                <ul className="space-y-2">
                  {primaryEdu.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Secondary Schooling / Junior College Cards */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold px-1">
              Prior Education (Secondary & Higher Secondary)
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {secondaryEdu.map((item, idx) => (
                <div
                  key={idx}
                  className="glass-card rounded-xl p-5 border border-slate-800/80 hover:border-slate-700 transition-all bg-slate-900/40 space-y-2.5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                        <School size={13} className="text-sky-400" />
                        <span>{item.qualification}</span>
                      </div>
                      <h4 className="text-sm font-bold text-slate-200">
                        {item.institution}
                      </h4>
                    </div>

                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-slate-800 text-emerald-400 border border-slate-700 flex-shrink-0">
                      {item.score}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800/60 font-mono">
                    <span>{item.board} ({item.stream})</span>
                    <span className="text-slate-400">{item.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
