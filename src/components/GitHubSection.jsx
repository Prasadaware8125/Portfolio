import React, { useState, useEffect } from 'react';
import { ExternalLink, Code2 } from 'lucide-react';
import { GithubIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

const featuredRepos = [
  {
    name: 'WanderLust',
    displayName: 'WanderLust',
    description: 'Full-stack accommodation listing platform built with Node.js, Express, MongoDB, EJS, Passport.js, Cloudinary & Leaflet.',
    language: 'JavaScript',
    url: 'https://github.com/Prasadaware8125/WanderLust'
  },
  {
    name: 'skn_hackthon',
    displayName: 'KrishiSakhi',
    description: 'AI-powered smart farming platform with soil report analysis, weather advisory, and Groq API chatbot. Techathon 1.0 Runner-Up.',
    language: 'Python',
    url: 'https://github.com/Prasadaware8125/skn_hackthon'
  },
  {
    name: 'RAG_FRONTEND_DEPLOY',
    displayName: 'SourceIQ — Frontend',
    description: 'React.js application featuring multi-turn grounded chat, source citations, document uploads, and Markdown rendering.',
    language: 'JavaScript',
    url: 'https://github.com/Prasadaware8125/RAG_FRONTEND_DEPLOY'
  },
  {
    name: 'RAG_SERVER_DEPLOY',
    displayName: 'SourceIQ — Backend',
    description: 'Python RAG backend utilizing web scraping, Redis caching, and citation grounding for engineering education queries.',
    language: 'Python',
    url: 'https://github.com/Prasadaware8125/RAG_SERVER_DEPLOY'
  },
  {
    name: 'AptiMind',
    displayName: 'AptiMind',
    description: 'Agentic AI aptitude preparation platform with LangGraph multi-agent orchestration, ChromaDB RAG, and FastAPI endpoints.',
    language: 'Python',
    url: 'https://github.com/Prasadaware8125/AptiMind'
  }
];

export default function GitHubSection() {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/Prasadaware8125')
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error('Failed to fetch profile');
      })
      .then((data) => setProfileData(data))
      .catch(() => setProfileData(null));
  }, []);

  return (
    <section id="github" className="py-20 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-sky-500/10 text-sky-400 border border-sky-500/20 mb-3">
            <GithubIcon size={13} />
            <span>OPEN SOURCE & CODE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight">
            Building in Public
          </h2>
          <p className="text-sm text-slate-400 max-w-md mt-2">
            Explore my public GitHub repositories, active codebases, and ongoing open-source work.
          </p>
        </div>

        {/* Profile Card Summary */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="glass-card rounded-2xl p-6 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center text-sky-400 font-bold text-xl shadow-inner overflow-hidden">
                {profileData?.avatar_url ? (
                  <img
                    src={profileData.avatar_url}
                    alt="Prasad Aware GitHub Avatar"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <GithubIcon size={28} />
                )}
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                  <span>Prasad Jayvant Aware</span>
                  <span className="text-xs font-mono font-normal text-slate-400">@Prasadaware8125</span>
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  {profileData?.bio || 'B.Tech IT Undergraduate | Full-Stack & Agentic AI Developer'}
                </p>
              </div>
            </div>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs bg-slate-900 text-slate-100 border border-slate-700 hover:border-sky-500 hover:text-sky-300 transition-all flex-shrink-0"
            >
              <GithubIcon size={16} />
              <span>Visit GitHub Profile</span>
              <ExternalLink size={13} />
            </a>
          </div>
        </div>

        {/* Public Repositories Grid: 5 Featured Repositories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredRepos.map((repo, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 border border-slate-800 hover:border-sky-500/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                    <Code2 size={16} />
                  </span>
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-slate-900 text-sky-300 border border-slate-800">
                    {repo.language}
                  </span>
                </div>

                <h4 className="text-base font-bold text-slate-100 group-hover:text-sky-300 transition-colors mb-2">
                  {repo.displayName}
                </h4>

                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {repo.description}
                </p>
              </div>

              <a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between w-full pt-3 border-t border-slate-800 text-xs font-mono text-slate-300 hover:text-sky-400 transition-colors"
              >
                <span>View Repository</span>
                <ExternalLink size={13} />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
