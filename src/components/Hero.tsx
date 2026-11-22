import React, { useState } from 'react';
import { portfolioData } from '../data/portfolio';
import { motion } from 'framer-motion';
import { ArrowDown, FileText, Sparkles, MapPin, ExternalLink, Cpu, Brain, Layers } from 'lucide-react';

export const Hero: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(true);

  const handleScrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-grid-pattern w-full max-w-full">
      {/* Decorative gradient glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-[500px] h-52 sm:h-[320px] bg-gradient-to-tr from-brand-500/10 via-accent-500/10 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="hidden sm:block absolute top-20 right-10 w-72 h-72 bg-brand-400/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-w-0">
          
          {/* Left Text Column (Col 7) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 text-center lg:text-left min-w-0 w-full"
          >
            {/* Availability Badge */}
            {portfolioData.profile.availability.active && (
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-300 text-[11px] sm:text-xs font-medium mb-5 shadow-sm max-w-full">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="truncate">{portfolioData.profile.availability.status}</span>
              </div>
            )}

            {/* Sub-label */}
            <div className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-brand-600 dark:text-brand-400 mb-3 flex items-center justify-center lg:justify-start gap-1.5 flex-wrap">
              <Sparkles className="w-3.5 h-3.5 shrink-0" />
              <span>{portfolioData.profile.heroSublabel}</span>
            </div>

            {/* Main Striking Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.2] mb-5">
              Building Ideas Into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-indigo-600 to-accent-600 dark:from-brand-400 dark:via-indigo-300 dark:to-accent-400">
                Real-World Solutions.
              </span>
            </h1>

            {/* Introductory Description */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
              {portfolioData.profile.bio}
            </p>

            {/* Location & Institution info */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs text-slate-500 dark:text-slate-400 mb-8">
              <span className="inline-flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800/70 px-2.5 py-1 rounded-lg border border-slate-200/60 dark:border-slate-700/60 text-[11px] sm:text-xs">
                <MapPin className="w-3 h-3 text-brand-500 shrink-0" />
                <span>{portfolioData.profile.location}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800/70 px-2.5 py-1 rounded-lg border border-slate-200/60 dark:border-slate-700/60 font-mono text-[10px] sm:text-[11px]">
                KIT Coimbatore &middot; CSBS '29
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <button
                onClick={handleScrollToProjects}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-medium text-sm px-6 py-3.5 rounded-xl shadow-md hover:shadow-brand-500/25 transition-all group"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </button>

              <a
                href={portfolioData.profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white dark:bg-slate-800/90 text-slate-800 dark:text-slate-100 font-medium text-sm px-6 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-brand-500 dark:hover:border-brand-400 hover:bg-slate-50 dark:hover:bg-slate-800 shadow-sm transition-all group"
              >
                <FileText className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                <span>Download Resume</span>
              </a>

              <button
                onClick={handleScrollToContact}
                className="w-full sm:w-auto text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 px-4 py-3.5 transition-colors inline-flex items-center justify-center gap-1"
              >
                <span>Get in Touch</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Creative Visual Profile Composition (Col 5) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center relative min-w-0 w-full"
          >
            <div className="relative w-64 sm:w-72 mx-auto">
              
              {/* Outer Glow & Gradient Border */}
              <div className="w-full aspect-[4/5] rounded-3xl p-1 bg-gradient-to-tr from-brand-600 via-indigo-500 to-accent-500 shadow-2xl shadow-indigo-500/10">
                <div className="w-full h-full rounded-[22px] overflow-hidden bg-slate-900 relative">
                  {imageLoaded ? (
                    <img
                      src={portfolioData.profile.avatar}
                      alt={portfolioData.profile.name}
                      onError={() => setImageLoaded(false)}
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    /* Fallback Typographic Monogram Badge */
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-brand-700 to-slate-900 text-white p-6 text-center">
                      <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-3xl font-extrabold tracking-tight mb-3">
                        {portfolioData.profile.initials}
                      </div>
                      <span className="font-semibold text-base">{portfolioData.profile.name}</span>
                      <span className="text-xs text-brand-200 mt-1">Computer Science & Business Systems</span>
                    </div>
                  )}

                  {/* Gradient overlay at bottom of card */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent flex items-end p-4">
                    <div>
                      <p className="text-white text-xs font-semibold">{portfolioData.profile.name}</p>
                      <p className="text-slate-300 text-[11px]">CSBS &middot; KIT Coimbatore</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Tech Pill 1: Full-Stack Django */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                className="absolute -top-3 -left-3 sm:-left-6 bg-white dark:bg-slate-800/95 backdrop-blur-md px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-2xl shadow-lg border border-slate-200/80 dark:border-slate-700/80 flex items-center gap-2 sm:gap-2.5 z-20"
              >
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                  <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <p className="text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold text-slate-400">Backend</p>
                  <p className="text-[11px] sm:text-xs font-bold text-slate-800 dark:text-slate-200">Python & Django</p>
                </div>
              </motion.div>

              {/* Floating Tech Pill 2: AI & LLMs */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.6 }}
                className="absolute -bottom-4 -right-3 sm:-right-6 bg-white dark:bg-slate-800/95 backdrop-blur-md px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-2xl shadow-lg border border-slate-200/80 dark:border-slate-700/80 flex items-center gap-2 sm:gap-2.5 z-20"
              >
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
                  <Brain className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <p className="text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold text-slate-400">Exploration</p>
                  <p className="text-[11px] sm:text-xs font-bold text-slate-800 dark:text-slate-200">AI & NLP Research</p>
                </div>
              </motion.div>

              {/* Floating Tech Pill 3: Systems & Microcontrollers */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1.2 }}
                className="hidden sm:flex absolute top-1/2 -right-8 -translate-y-1/2 bg-white dark:bg-slate-800/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-md border border-slate-200/80 dark:border-slate-700/80 items-center gap-2 z-10"
              >
                <Cpu className="w-3.5 h-3.5 text-accent-500" />
                <span className="text-[11px] font-medium text-slate-700 dark:text-slate-300">Systems & Hardware</span>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
