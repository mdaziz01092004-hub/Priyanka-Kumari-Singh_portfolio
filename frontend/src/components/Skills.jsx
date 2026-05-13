import { motion } from 'framer-motion';
import { Globe, Monitor, CheckCircle2, Sparkles, Users, Flame, Layers } from 'lucide-react';

const Skills = () => {
  const languageSkills = [
    { name: 'English', level: 'Fluent / Advanced', percentage: 95, color: 'bg-literary-600' },
    { name: 'Hindi', level: 'Native / Fluent', percentage: 95, color: 'bg-literary-500' },
    { name: 'Bengali', level: 'Fluent / Spoken & Written', percentage: 90, color: 'bg-literary-400' },
  ];

  const computerSkills = [
    { name: 'Computer Fundamentals & OS', description: 'Windows operating structures, file navigation, and system configuration.' },
    { name: 'Word Processing & Documentation', description: 'Drafting structured assignments, academic reports, and literary texts.' },
    { name: 'Spreadsheets & Presentation', description: 'Basic tabular data arrangement and professional slideshow structuring.' },
    { name: 'Internet Applications & Email', description: 'Advanced research methodologies, online library access, and professional correspondence.' },
  ];

  const softSkills = [
    { name: 'Analytical Communication', desc: 'Conveying structured ideas clearly across written documentation and spoken discourse.', icon: Users },
    { name: 'Collaborative Dedication', desc: 'Eager to listen, adapt, and coordinate smoothly within dynamic team projects.', icon: Flame },
    { name: 'Organized Time Management', desc: 'Prioritizing structured tasks reliably to meet deadlines with precision.', icon: Layers }
  ];

  return (
    <section id="skills" className="pt-28 pb-20 relative min-h-[calc(100vh-160px)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-serif font-bold text-ink mb-4"
          >
            Core Competencies & <span className="text-literary-600">Skills</span>
          </motion.h2>
          <div className="w-20 h-0.5 bg-literary-400 mx-auto mb-6"></div>
          <p className="text-ink-muted text-base sm:text-lg leading-relaxed">
            Combining robust linguistic agility with modern computer application capabilities.
          </p>
        </div>

        {/* Two Column Section Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          
          {/* Languages Left Column */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/70 backdrop-blur-xs p-8 rounded-2xl border border-literary-200/60 shadow-2xs hover:shadow-sm transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-literary-100 flex items-center justify-center text-literary-600">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-ink">Language Proficiency</h3>
                  <p className="text-xs text-ink-muted">Multilingual communication foundations</p>
                </div>
              </div>

              <div className="space-y-6">
                {languageSkills.map((lang, idx) => (
                  <div key={lang.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-ink">{lang.name}</span>
                      <span className="text-xs font-medium text-literary-600">{lang.level}</span>
                    </div>
                    {/* Progress Bar Container */}
                    <div className="w-full h-2.5 bg-literary-100 rounded-full overflow-hidden p-0.5 border border-literary-200/40">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.2, duration: 1, ease: "easeOut" }}
                        className={`h-full rounded-full ${lang.color}`}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Micro Badge Box */}
            <div className="mt-8 pt-6 border-t border-literary-100 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-literary-50 text-literary-700 border border-literary-200">
                <Sparkles className="w-3 h-3 text-literary-500" /> Professional Translation Scope
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-literary-50 text-literary-700 border border-literary-200">
                <Sparkles className="w-3 h-3 text-literary-500" /> Creative Writing
              </span>
            </div>
          </motion.div>

          {/* Computer Application Right Column */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white/70 backdrop-blur-xs p-8 rounded-2xl border border-literary-200/60 shadow-2xs hover:shadow-sm transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-literary-100 flex items-center justify-center text-literary-600">
                  <Monitor className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-ink">Computer Application</h3>
                  <p className="text-xs text-ink-muted">Basic operational knowledge & digital tools</p>
                </div>
              </div>

              {/* List of clean skill rows */}
              <div className="space-y-4">
                {computerSkills.map((skill) => (
                  <div 
                    key={skill.name}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-literary-50/50 hover:bg-literary-50 transition-colors border border-transparent hover:border-literary-200/40"
                  >
                    <CheckCircle2 className="w-4 h-4 text-literary-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-semibold text-ink">{skill.name}</div>
                      <div className="text-xs text-ink-muted mt-0.5 leading-relaxed">{skill.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 text-center">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-literary-100 text-literary-700">
                Continuous Self-Learning Focus
              </span>
            </div>
          </motion.div>

        </div>

        {/* Added Third Layout Module: Soft Skills & Aptitudes */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-literary-100/40 rounded-2xl p-8 border border-literary-200/80"
        >
          <div className="mb-6">
            <h3 className="text-lg font-serif font-bold text-ink">Professional Aptitudes & Soft Skills</h3>
            <p className="text-xs text-ink-muted">Core human competencies strengthening professional output</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {softSkills.map((soft) => {
              const SoftIcon = soft.icon;
              return (
                <div key={soft.name} className="bg-white/80 p-5 rounded-xl border border-literary-200 shadow-2xs">
                  <div className="flex items-center gap-2 mb-2">
                    <SoftIcon className="w-4 h-4 text-literary-600" />
                    <h4 className="text-sm font-bold text-ink">{soft.name}</h4>
                  </div>
                  <p className="text-xs text-ink-muted leading-relaxed">{soft.desc}</p>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
