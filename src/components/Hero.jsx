import React from 'react';
import { ArrowRight, Mail, Code2, MapPin, GraduationCap, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle Background Glow Spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* Left Column: Content */}
          <div className="flex-1 text-left">
            {/* Status Pills */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20">
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
                Available for Software Engineering Internships & Roles
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-800/80 text-slate-300 border border-slate-700/60">
                <MapPin size={12} className="text-sky-400" /> India
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-100 tracking-tight leading-tight mb-4">
              Hi, I'm <span className="text-gradient-accent">Prasad Aware.</span>
            </h1>

            {/* Subheading */}
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-300 mb-6 flex flex-wrap items-center gap-2">
              <span>Software Engineer</span>
              <span className="text-sky-500">•</span>
              <span>Full-Stack Developer</span>
              <span className="text-sky-500">•</span>
              <span className="text-sky-400">Java & DSA Enthusiast</span>
            </h2>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed mb-8">
              B.Tech Information Technology undergraduate with a <strong className="text-slate-200">9.48/10 CGPA</strong>, hands-on full-stack development experience, and <strong className="text-slate-200">300+ Data Structures & Algorithms problems</strong> solved. I enjoy building practical software solutions and continuously learning new technologies.
            </p>

            {/* CTA Buttons Row */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white shadow-xl shadow-sky-500/25 hover:shadow-sky-500/40 transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>View My Projects</span>
                <ArrowRight size={16} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-slate-900/90 text-slate-200 border border-slate-700/80 hover:bg-slate-800 hover:border-slate-600 hover:text-white transition-all duration-200"
              >
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links & Quick Contact */}
            <div className="flex items-center gap-6 pt-4 border-t border-slate-800/80">
              <span className="text-xs font-mono text-slate-400 tracking-wider uppercase">Connect:</span>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-sky-400 text-sm font-medium transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={18} />
                <span className="hidden sm:inline">GitHub</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-sky-400 text-sm font-medium transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={18} />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 text-slate-400 hover:text-sky-400 text-sm font-medium transition-colors"
                aria-label="Send Email"
              >
                <Mail size={18} />
                <span className="hidden sm:inline">{personalInfo.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Code/Profile Card Visual */}
          <div className="w-full lg:w-96 flex-shrink-0">
            <div className="glass-card rounded-2xl p-6 relative border border-slate-800 shadow-2xl">
              {/* Card Header Bar */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-xs font-mono text-slate-400">candidate_profile.json</span>
              </div>

              {/* Card Content Mockup */}
              <div className="space-y-3.5 font-mono text-xs text-slate-300">
                <div>
                  <span className="text-purple-400">const</span> candidate = &#123;
                </div>
                <div className="pl-4 space-y-1.5">
                  <p><span className="text-sky-400">name</span>: <span className="text-amber-300">"{personalInfo.name}"</span>,</p>
                  <p><span className="text-sky-400">degree</span>: <span className="text-emerald-300">"B.Tech IT"</span>,</p>
                  <p><span className="text-sky-400">college</span>: <span className="text-amber-300">"WIT Solapur"</span>,</p>
                  <p><span className="text-sky-400">cgpa</span>: <span className="text-emerald-400 font-bold">9.48</span>,</p>
                  <p><span className="text-sky-400">gradYear</span>: <span className="text-sky-300">"June 2027"</span>,</p>
                  <p><span className="text-sky-400">dsaSolved</span>: <span className="text-amber-400 font-bold">"300+"</span>,</p>
                  <p><span className="text-sky-400">techathon</span>: <span className="text-emerald-300">"2nd Place"</span>,</p>
                  <p><span className="text-sky-400">status</span>: <span className="text-sky-400 font-semibold">"Ready for SDE Roles"</span></p>
                </div>
                <div>&#125;;</div>
              </div>

              {/* Bottom Target Badges */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-sky-500/10 text-sky-400 border border-sky-500/20">Java</span>
                <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">React</span>
                <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Node.js</span>
                <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-purple-500/10 text-purple-400 border border-purple-500/20">MongoDB</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
