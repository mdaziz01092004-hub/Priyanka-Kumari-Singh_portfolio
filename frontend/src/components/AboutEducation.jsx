import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, BookMarked, BookOpen, Compass, Feather } from 'lucide-react';

const AboutEducation = () => {
  const educationData = [
    {
      degree: "B.A. English (Honors/General)",
      institution: "North Bengal University (N.BU)",
      year: "Continuing",
      description: "Deepening critical understanding of classical and modern literature, literary theory, and advanced linguistic discourse.",
      icon: BookMarked,
      current: true,
    },
    {
      degree: "Class 12 (Higher Secondary)",
      institution: "West Bengal Council of Higher Secondary Education (W.B.C.H.S.E)",
      year: "2024",
      description: "Completed higher secondary coursework with a dedicated focus on the humanities, linguistic structures, and cultural histories.",
      icon: GraduationCap,
      current: false,
    },
    {
      degree: "Class 10 (Secondary Examination)",
      institution: "West Bengal Board of Secondary Education (W.B.B.S.E)",
      year: "2022",
      description: "Successfully built foundational academic competencies with active involvement in school curricular activities.",
      icon: Award,
      current: false,
    },
  ];

  const coreFocusThemes = [
    {
      title: "British Romanticism & Victorian Prose",
      description: "Analyzing aesthetic evolutions, nature motifs, and socio-industrial responses in 19th-century textual frameworks.",
      icon: Feather
    },
    {
      title: "Post-Colonial Literature & Theory",
      description: "Studying cultural identity, linguistic agency, and subaltern narratives across global English-speaking perspectives.",
      icon: Compass
    },
    {
      title: "Advanced Rhetoric & Linguistics",
      description: "Deconstructing syntactical arrangements, stylistic devices, and persuasive writing paradigms to hone clear documentation skills.",
      icon: BookOpen
    }
  ];

  return (
    <section id="education" className="pt-28 pb-20 bg-literary-100/50 relative min-h-[calc(100vh-160px)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-serif font-bold text-ink mb-4"
          >
            About Me & <span className="text-literary-600">Education</span>
          </motion.h2>
          <div className="w-20 h-0.5 bg-literary-400 mx-auto mb-6"></div>
          <p className="text-ink-muted text-base sm:text-lg leading-relaxed">
            A passionate literature student dedicated to bridging theoretical knowledge with collaborative real-world environments.
          </p>
        </div>

        {/* Two column grid: About Me details vs Vertical Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Personal Context Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-white/80 backdrop-blur-md p-8 rounded-2xl border border-literary-200 shadow-sm"
          >
            <h3 className="text-xl font-serif font-bold text-ink mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-literary-500 rounded-full"></span>
              Personal Summary
            </h3>
            
            <p className="text-ink-muted text-sm sm:text-base leading-relaxed mb-6">
              I am eager to apply my theoretical insights from literary studies to highly practical, adaptive, and communicative working environments. I value precision, structured narratives, and collaborative problem-solving.
            </p>

            <ul className="space-y-4 text-sm border-t border-literary-100 pt-6">
              <li className="flex items-start gap-3">
                <span className="font-semibold text-ink min-w-[100px]">Full Name:</span>
                <span className="text-ink-muted">Priyanka Kumari Singh</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-semibold text-ink min-w-[100px]">Born:</span>
                <span className="text-ink-muted flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-literary-500" />
                  March 16, 2005
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-semibold text-ink min-w-[100px]">Gender:</span>
                <span className="text-ink-muted">Female</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-semibold text-ink min-w-[100px]">Languages:</span>
                <span className="text-ink-muted">Hindi, English, and Bengali (Fluent)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-semibold text-ink min-w-[100px]">Experience:</span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-literary-100 text-literary-700">
                  Fresher
                </span>
              </li>
            </ul>

            {/* Premium decorative quote block */}
            <div className="mt-8 p-4 rounded-xl bg-literary-50 border-l-4 border-literary-400 italic text-xs text-ink-muted">
              "Literature adds to reality, it does not simply describe it. It enriches the necessary competencies that daily life requires and provides."
            </div>
          </motion.div>

          {/* Right Column: Premium Vertical Timeline */}
          <div className="lg:col-span-7 relative">
            {/* Vertical guiding line */}
            <div className="absolute top-4 bottom-4 left-[22px] sm:left-7 w-0.5 bg-literary-200"></div>

            <div className="space-y-8 relative">
              {educationData.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.degree}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    className="flex gap-4 sm:gap-6 group"
                  >
                    {/* Timeline Node / Icon */}
                    <div className={`relative z-10 flex-shrink-0 w-11 h-11 sm:w-14 sm:h-14 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                      item.current 
                        ? 'bg-literary-600 border-literary-200 text-literary-50 shadow-md group-hover:scale-110' 
                        : 'bg-white border-literary-300 text-literary-600 group-hover:border-literary-500'
                    }`}>
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>

                    {/* Timeline Card Content */}
                    <div className="flex-grow bg-white/70 backdrop-blur-xs p-6 rounded-2xl border border-literary-200/60 shadow-2xs hover:shadow-md transition-shadow">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                        <h4 className="text-base sm:text-lg font-serif font-bold text-ink">
                          {item.degree}
                        </h4>
                        <span className={`inline-block w-fit px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                          item.current 
                            ? 'bg-literary-600 text-literary-50 animate-pulse' 
                            : 'bg-literary-100 text-literary-700'
                        }`}>
                          {item.year}
                        </span>
                      </div>

                      <div className="text-xs sm:text-sm font-medium text-literary-600 mb-2">
                        {item.institution}
                      </div>

                      <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>

        {/* Added More Info Core Themes Section */}
        <div className="mt-16 pt-12 border-t border-literary-200/60">
          <div className="text-center mb-10">
            <h3 className="text-xs uppercase tracking-widest font-bold text-literary-500 mb-1">Academic Deep Dive</h3>
            <h4 className="text-xl font-serif text-ink">Core Literary Focus Themes</h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coreFocusThemes.map((theme, idx) => {
              const ThemeIcon = theme.icon;
              return (
                <motion.div
                  key={theme.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.5 }}
                  className="bg-white/60 p-6 rounded-2xl border border-literary-200 shadow-2xs hover:bg-white/90 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-literary-100 flex items-center justify-center text-literary-600 mb-4">
                    <ThemeIcon className="w-5 h-5" />
                  </div>
                  <h5 className="font-serif font-bold text-base text-ink mb-2">
                    {theme.title}
                  </h5>
                  <p className="text-xs text-ink-muted leading-relaxed">
                    {theme.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutEducation;
