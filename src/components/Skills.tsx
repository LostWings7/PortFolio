import React, { useState } from 'react';
import { portfolioData, SkillCategory } from '../data/portfolio';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Globe, Brain, Wrench, Sparkles } from 'lucide-react';

const categoryIcons: Record<string, React.ElementType> = {
  'Programming Languages': Terminal,
  'Web Development': Globe,
  'AI & Machine Learning': Brain,
  'Tools, Databases & Systems': Wrench,
};

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section id="skills" className="py-20 md:py-28 bg-slate-50/50 dark:bg-slate-900/30 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 text-xs font-semibold mb-3 border border-brand-200/60 dark:border-brand-800/60">
            Technical Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Tools, Frameworks & Core Capabilities
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Organized by functional domains with practical application contexts, avoiding artificial percentage meters.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {portfolioData.skillCategories.map((cat, idx) => {
            const Icon = categoryIcons[cat.title] || Terminal;
            const isActive = activeTab === idx;
            return (
              <button
                key={cat.title}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-brand-600 text-white shadow-md shadow-brand-500/20'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/80 hover:bg-slate-100 dark:hover:bg-slate-700/60'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-brand-600 dark:text-brand-400'}`} />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Display */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {portfolioData.skillCategories.map((cat: SkillCategory, idx: number) => {
              if (idx !== activeTab) return null;
              const Icon = categoryIcons[cat.title] || Terminal;

              return (
                <motion.div
                  key={cat.title}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white dark:bg-slate-800/90 rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-700/80 shadow-soft"
                >
                  <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-100 dark:border-slate-700/60">
                    <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-950/80 text-brand-600 dark:text-brand-400 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">{cat.title}</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{cat.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className={`p-4 rounded-xl border transition-all ${
                          skill.highlight
                            ? 'bg-brand-50/40 dark:bg-brand-950/20 border-brand-200/70 dark:border-brand-800/60'
                            : 'bg-slate-50/60 dark:bg-slate-900/40 border-slate-200/60 dark:border-slate-800/80'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                            <span>{skill.name}</span>
                          </h4>
                          {skill.highlight && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-brand-600 dark:text-brand-400 bg-brand-100/80 dark:bg-brand-900/50 px-2 py-0.5 rounded-full">
                              <Sparkles className="w-2.5 h-2.5" />
                              <span>Core</span>
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                          {skill.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
