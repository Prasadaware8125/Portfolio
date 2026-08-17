import React from 'react';
import { Award, CheckCircle, ExternalLink, ShieldCheck } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 border-b border-slate-800/80 bg-slate-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-sky-500/10 text-sky-400 border border-sky-500/20 mb-3">
            <Award size={13} />
            <span>CREDENTIALS & COURSES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight">
            Certifications
          </h2>
          <p className="text-sm text-slate-400 max-w-lg mt-2">
            Structured courses and specialized technical certifications completed alongside academic curriculum.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 border border-slate-800 hover:border-sky-500/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-9 h-9 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                    <ShieldCheck size={18} />
                  </span>
                  <span className="text-xs font-mono text-slate-400 font-semibold px-2.5 py-0.5 rounded bg-slate-900 border border-slate-800">
                    {cert.issuer}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-100 group-hover:text-sky-300 transition-colors mb-3 leading-snug">
                  {cert.title}
                </h3>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cert.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1">
                  <CheckCircle size={12} className="text-emerald-400" /> Verified
                </span>
                <span className="text-sky-400 font-semibold">{cert.issuer}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
