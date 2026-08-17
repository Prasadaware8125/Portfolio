import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-slate-950 border-t border-slate-800/80 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Copyright */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center font-bold text-sky-400 text-xs font-mono">
              PA
            </div>
            <p className="text-slate-400">
              © 2026 Prasad Jayvant Aware. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-sky-400 transition-colors flex items-center gap-1.5"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={16} />
              <span>GitHub</span>
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-sky-400 transition-colors flex items-center gap-1.5"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={16} />
              <span>LinkedIn</span>
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="text-slate-400 hover:text-sky-400 transition-colors flex items-center gap-1.5"
              aria-label="Email Prasad Aware"
            >
              <Mail size={16} />
              <span>Email</span>
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 transition-colors cursor-pointer"
            aria-label="Back to Top"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>

        </div>
      </div>
    </footer>
  );
}
