import React from 'react';
import { portfolioData } from '../data/portfolio';
import { motion } from 'framer-motion';
import { Compass, Lightbulb, Code2, ShieldAlert } from 'lucide-react';

const pillarIcons = [Lightbulb, Code2, Compass, ShieldAlert];

export const Approach: React.FC = () => {
  const { approach } = portfolioData;

  return (
    <section id="approach" className="py-20 md:py-28 bg-slate-50/50 dark:bg-slate-900/40 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 text-xs font-semibold mb-3 border border-brand-200/60 dark:border-brand-800/60">
            Engineering Principles
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {approach.headline}
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {approach.subtitle}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {approach.pillars.map((pillar, index) => {
            const Icon = pillarIcons[index % pillarIcons.length];
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white dark:bg-slate-800/80 p-7 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-soft relative overflow-hidden group hover:border-brand-300 dark:hover:border-brand-700 transition-colors"
              >
                {/* Background Large Number Accent */}
                <span className="absolute -top-3 -right-2 text-6xl font-black text-slate-100 dark:text-slate-800/60 select-none pointer-events-none group-hover:text-brand-100 dark:group-hover:text-brand-950/40 transition-colors">
                  {pillar.number}
                </span>

                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-950/80 text-brand-600 dark:text-brand-400 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
