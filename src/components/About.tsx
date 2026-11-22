import React from 'react';
import { portfolioData } from '../data/portfolio';
import { motion } from 'framer-motion';
import { Layers, Brain, FileCode, Cpu, CheckCircle2 } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Layers,
  Brain,
  FileCode,
  Cpu,
};

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 text-xs font-semibold mb-3 border border-brand-200/60 dark:border-brand-800/60">
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Curiosity Guided by Engineering Rigor
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Bridging software engineering, applied machine learning, and research-grade natural language processing.
          </p>
        </div>

        {/* Narrative & Quick Context */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Main Story (Col 8) */}
          <div className="lg:col-span-8 bg-white dark:bg-slate-800/80 rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-700/80 shadow-soft">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
              Designing Software That Solves Real-World Problems
            </h3>
            
            <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                I am a Computer Science & Business Systems student at <strong className="text-slate-900 dark:text-white font-semibold">Kalaignar Karunanidhi Institute of Technology (KIT)</strong> in Coimbatore, India. My passion lies in understanding how modern computing systems fit together—from backend architecture and database models to algorithmic optimization and neural language models.
              </p>
              <p>
                My development experience is anchored in <strong className="text-slate-900 dark:text-white font-semibold">Python and Django</strong>, where I enjoy building end-to-end web platforms that tackle complex requirements—such as constraint-satisfaction scheduling engines, secure examination portals, and multi-tenant intelligence systems.
              </p>
              <p>
                Alongside core software development, I actively conduct experimental research in <strong className="text-slate-900 dark:text-white font-semibold">Natural Language Processing</strong>. My current research investigates tokenizer fragmentation, cross-script prediction stability, and selective prediction across Tamil and Romanized Tanglish text.
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-700/60 flex flex-wrap gap-4 text-xs font-medium text-slate-700 dark:text-slate-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                <span>Full-Stack Python & Django</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                <span>Relational Schema & Query Optimization</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                <span>NLP & Tokenizer Representation Research</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                <span>Embedded Hardware Telemetry</span>
              </span>
            </div>
          </div>

          {/* Academic Snapshot Card (Col 4) */}
          <div className="lg:col-span-4 bg-gradient-to-br from-brand-600 to-indigo-800 text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-card">
            <div>
              <span className="text-xs uppercase font-mono tracking-wider text-brand-200">Academic Snapshot</span>
              <h4 className="text-xl font-bold mt-2">B.Tech. CSBS</h4>
              <p className="text-brand-100 text-xs mt-1">Computer Science & Business Systems</p>
              <p className="text-brand-200 text-xs mt-0.5">KIT &middot; Coimbatore, India</p>
              
              <div className="my-6 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/15">
                <span className="text-[11px] uppercase tracking-wider text-brand-200 block">Current Standing</span>
                <span className="text-2xl font-extrabold mt-0.5 block">CGPA 9.03 / 10.0</span>
                <span className="text-xs text-brand-200 mt-1 block">Second Year &middot; Class of 2029</span>
              </div>
            </div>

            <div className="text-xs text-brand-100/90 space-y-1.5 font-mono">
              <p>&gt; Focus: Practical Engineering</p>
              <p>&gt; Research: Cross-Script Dravidian NLP</p>
              <p>&gt; Status: Open for Internships</p>
            </div>
          </div>

        </div>

        {/* 4 Professional Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioData.about.highlights.map((item, index) => {
            const Icon = iconMap[item.icon] || Layers;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-slate-800/70 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-soft hover:shadow-card-hover transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-950/80 text-brand-600 dark:text-brand-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-base mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
