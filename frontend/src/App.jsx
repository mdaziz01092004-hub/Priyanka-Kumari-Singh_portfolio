import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutEducation from './components/AboutEducation';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-literary-50 overflow-x-hidden">
      {/* Sticky Premium Navigation */}
      <Navbar />

      {/* Main content flow */}
      <main className="flex-grow">
        <Hero />
        <AboutEducation />
        <Skills />
        <Contact />
      </main>

      {/* Persistent footer with dynamic back-to-top feature */}
      <Footer />
    </div>
  );
}

export default App;
