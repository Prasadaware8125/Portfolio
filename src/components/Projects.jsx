import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Users, Award, ShieldCheck, Layers, CheckCircle2, ChevronRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';

const filterCategories = ['All', 'Full Stack', 'Backend', 'AI / ML', 'Mobile'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === 'All') return true;
    return project.categories.includes(activeFilter);
  });

  return (
    <section id="projects" className="py-20 border-b border-slate-800/80 bg-slate-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-sky-500/10 text-sky-400 border border-sky-500/20 mb-3">
            <FolderGit2 size={13} />
            <span>FEATURED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight">
            Software Engineering Projects
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mt-2">
            Real software systems engineered with modern full-stack architectures, clean code principles, and problem-solving focus.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                activeFilter === category
                  ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/20 font-bold'
                  : 'bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="space-y-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 hover:border-sky-500/40 transition-all duration-300 shadow-xl relative overflow-hidden group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Info Column */}
                <div className="lg:col-span-7 space-y-4">
                  {/* Top Badges */}
                  <div className="flex flex-wrap items-center gap-2">
                    {project.isTeam ? (
                      <>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/30">
                          <Users size={12} /> Team Project
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30">
                          <Award size={12} /> {project.role}
                        </span>
                      </>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/30">
                        <ShieldCheck size={12} /> Individual Full-Stack Project
                      </span>
                    )}

                    {project.categories.map((cat, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-900 text-slate-400 border border-slate-800">
                        {cat}
                      </span>
                    ))}
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-2xl font-extrabold text-slate-100 group-hover:text-sky-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm font-semibold text-sky-400 mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Problem Solved */}
                  <div className="bg-slate-900/70 p-4 rounded-xl border border-slate-800/80 space-y-1">
                    <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider block">Problem Solved:</span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {project.problemSolved}
                    </p>
                  </div>

                  {/* Team Leadership / Achievement Callout for KrishiSakhi */}
                  {project.isTeam && (
                    <div className="bg-gradient-to-r from-amber-500/10 to-purple-500/10 border border-amber-500/20 rounded-xl p-4 space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                        <Award size={14} />
                        <span>Leadership & Achievement</span>
                      </div>
                      <p className="text-xs text-slate-200">
                        <strong className="text-amber-300">{project.achievement}</strong> — {project.leadershipDetails}
                      </p>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="pt-3 flex flex-wrap items-center gap-3">
                    {/* Separate Frontend / Backend links for FinVault */}
                    {project.githubFrontend && (
                      <a
                        href={project.githubFrontend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-900 text-slate-200 border border-slate-700 hover:border-sky-500 hover:text-white transition-all"
                      >
                        <GithubIcon size={15} className="text-sky-400" />
                        <span>Frontend Repository</span>
                      </a>
                    )}
                    {project.githubBackend && (
                      <a
                        href={project.githubBackend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-900 text-slate-200 border border-slate-700 hover:border-indigo-500 hover:text-white transition-all"
                      >
                        <GithubIcon size={15} className="text-indigo-400" />
                        <span>Backend Repository</span>
                      </a>
                    )}

                    {/* Single GitHub link for WanderLust or other standard projects */}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-900 text-slate-200 border border-slate-700 hover:border-sky-500 hover:text-white transition-all"
                      >
                        <GithubIcon size={15} className="text-sky-400" />
                        <span>View on GitHub</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Column: Key Features & Tech Stack */}
                <div className="lg:col-span-5 space-y-6">
                  {/* Tech Stack Chips */}
                  <div>
                    <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                      <Layers size={13} className="text-sky-400" />
                      <span>Technologies Used</span>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1 rounded-lg text-xs font-mono font-semibold bg-sky-500/10 text-sky-300 border border-sky-500/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features List */}
                  <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800 space-y-3">
                    <h4 className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-emerald-400" />
                      <span>Key Features & Workflows</span>
                    </h4>
                    <ul className="space-y-2">
                      {project.keyFeatures.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <ChevronRight size={13} className="text-sky-400 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
