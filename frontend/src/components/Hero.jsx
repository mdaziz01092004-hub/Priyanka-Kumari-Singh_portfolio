import { motion } from 'framer-motion';
import { ArrowDown, Mail, MapPin } from 'lucide-react';

const Hero = () => {
  const scrollToContact = (e) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20 pb-12">
      {/* Background radial gradient accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-literary-200/40 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content Left Column */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-literary-100 text-literary-700 text-xs sm:text-sm font-medium mb-6 border border-literary-200/60 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-literary-500 animate-pulse"></span>
              Welcome to my portfolio & academic space
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-ink leading-tight tracking-tight mb-4">
              Priyanka Kumari <span className="text-literary-600 block sm:inline">Singh</span>
            </h1>

            <p className="text-lg sm:text-xl text-ink-muted font-normal max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              B.A. English Student <span className="text-literary-400 font-bold">|</span> Exploring Literature & Professional Opportunities
            </p>

            {/* Quick badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10 text-xs font-medium text-ink-muted">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/60 border border-literary-200/40 shadow-2xs">
                <MapPin className="w-3.5 h-3.5 text-literary-500" />
                Siliguri, WB, India
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/60 border border-literary-200/40 shadow-2xs">
                <Mail className="w-3.5 h-3.5 text-literary-500" />
                priyankakumarisingh1603@gmail.com
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4">
              <a
                href="#contact"
                onClick={scrollToContact}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-literary-600 text-literary-50 font-medium text-sm hover:bg-literary-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-center"
              >
                Contact Me
              </a>
              <a
                href="#education"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-transparent text-ink font-medium text-sm hover:bg-literary-100/80 transition-all duration-300 border border-literary-300 text-center flex items-center justify-center gap-2"
              >
                View Academic Journey
                <ArrowDown className="w-4 h-4 text-literary-500 animate-bounce" />
              </a>
            </div>
          </motion.div>

          {/* Visual Artwork Right Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="lg:col-span-5 flex justify-center items-center"
          >
            <div className="relative w-full max-w-md aspect-square flex items-center justify-center p-4">
              {/* Decorative background framing */}
              <div className="absolute inset-4 rounded-2xl bg-gradient-to-br from-literary-100 to-literary-200/40 rotate-3 transition-transform hover:rotate-6 duration-500 -z-10 shadow-inner"></div>
              <div className="absolute inset-4 rounded-2xl border border-literary-300/60 -rotate-2 -z-10 bg-white/40 backdrop-blur-xs"></div>
              
              {/* Working Demonstration image embedded */}
              <img
                src="/hero-illustration.png"
                alt="Literary aesthetic open book and quill illustration"
                className="w-full h-full object-contain rounded-xl shadow-sm hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
