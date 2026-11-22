import React from 'react';
import { portfolioData } from '../data/portfolio';
import { motion } from 'framer-motion';
import { Microscope, ExternalLink } from 'lucide-react';

export const Research: React.FC = () => {
  const { research } = portfolioData;

  return (
    <section id="research" className="py-20 md:py-28 bg-slate-50/70 dark:bg-slate-900/50 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 text-xs font-semibold mb-3 border border-purple-200/60 dark:border-purple-800/60">
            <Microscope className="w-3.5 h-3.5" />
            <span>Research & Inquiry</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Investigating Representation Invariance & Uncertainty
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {research.subtitle}
          </p>
        </div>

        {/* Featured Research Deep-Dive Box: TEP-RB */}
        <div className="bg-white dark:bg-slate-800/90 rounded-3xl border border-purple-200/60 dark:border-purple-900/40 p-6 sm:p-10 shadow-soft mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content (Col 7) */}
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="text-[11px] font-bold uppercase tracking-wider bg-purple-100 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full">
                  {research.highlightedStudy.type}
                </span>
                <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                  {research.highlightedStudy.institution}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
                {research.highlightedStudy.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                {research.highlightedStudy.summary}
              </p>

              {/* Research Metrics / Lens */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                {research.highlightedStudy.keyMetrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="bg-slate-50 dark:bg-slate-900/60 p-3 rounded-xl border border-slate-200/60 dark:border-slate-800"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      {metric.label}
                    </span>
                    <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-1 block">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://github.com/lostwings7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold bg-purple-600 hover:bg-purple-700 text-white px-4 py-2.5 rounded-xl shadow-sm transition-colors"
                >
                  <span>Explore Research Repository</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right: Authentic Research Figure (Col 5) */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700/80 bg-slate-950 p-2 shadow-inner">
                <img
                  src={research.highlightedStudy.image}
                  alt="Tamil-English Paired-View Workflow"
                  className="w-full h-auto object-cover rounded-xl"
                />
                <div className="mt-2 px-2 py-1 text-center">
                  <span className="text-[11px] font-mono text-slate-400">
                    Figure: Paired-View Reliability Benchmark Architecture
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Research Inquiry Domains */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {research.areas.map((area, idx) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white dark:bg-slate-800/80 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-soft flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/80 px-2 py-0.5 rounded-md inline-block mb-3">
                  {area.tag}
                </span>
                <h4 className="font-bold text-slate-900 dark:text-white text-base mb-2">
                  {area.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {area.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
