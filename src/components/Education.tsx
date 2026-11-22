import React from 'react';
import { portfolioData } from '../data/portfolio';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, MapPin, CheckCircle2 } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 text-xs font-semibold mb-3 border border-brand-200/60 dark:border-brand-800/60">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education & Certifications
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Rigorous undergraduate foundation in computing systems, algorithmic problem-solving, and continuous technical certifications.
          </p>
        </div>

        {/* Education Timeline & Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Main University Degree (Col 7) */}
          <div className="lg:col-span-7 space-y-6">
            {portfolioData.education.map((item, idx) => (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white dark:bg-slate-800/90 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-700/80 shadow-soft"
              >
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <span className="text-xs font-semibold text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/80 px-2.5 py-1 rounded-lg">
                    {item.period}
                  </span>
                  {item.grade && (
                    <span className="text-xs font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-lg border border-emerald-200/60 dark:border-emerald-800/60">
                      {item.grade}
                    </span>
                  )}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  {item.degree}
                </h3>
                
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mt-1">
                  {item.institution}
                </p>

                <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{item.location}</span>
                </div>

                {item.description && (
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                )}

                {item.highlights && item.highlights.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700/60 space-y-2">
                    {item.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-500 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Certifications Card (Col 5) */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-800 flex flex-col justify-between h-full">
              <div>
                <div className="inline-flex items-center gap-2 text-xs uppercase font-mono tracking-wider text-brand-300 mb-4">
                  <Award className="w-4 h-4 text-brand-400" />
                  <span>Verified Credentials</span>
                </div>

                <h4 className="text-xl font-bold mb-2">Technical Certifications</h4>
                <p className="text-xs text-slate-300 mb-6">
                  Completed accredited programs reinforcing network fundamentals, algorithms, Python engineering, and Java.
                </p>

                <div className="space-y-3">
                  {portfolioData.certifications.map((cert) => (
                    <div
                      key={cert.name}
                      className="bg-white/5 hover:bg-white/10 transition-colors p-3.5 rounded-xl border border-white/10 flex items-center justify-between gap-3"
                    >
                      <div>
                        <p className="text-xs sm:text-sm font-semibold text-white">{cert.name}</p>
                        <p className="text-[11px] text-slate-400 mt-0.5">{cert.issuer}</p>
                      </div>
                      <span className="text-xs font-mono text-brand-300 bg-brand-950/60 px-2 py-1 rounded-md border border-brand-800/40">
                        {cert.year}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800 text-xs text-slate-400">
                <p className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-brand-400" />
                  <span>Continuous self-learner & competitive programmer</span>
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
