import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutEducation from './components/AboutEducation';
import Skills from './components/Skills';
import Contact from './components/Contact';
import TodoList from './components/TodoList';
import Footer from './components/Footer';

function App() {
  const location = useLocation();

  // Instant scroll restoration on active physical route shifts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-literary-50 overflow-x-hidden">
      {/* Sticky Premium Navigation mapped to router URLs */}
      <Navbar />

      {/* Main content flow via routing Outlet */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<AboutEducation />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/todo" element={<TodoList />} />
        </Routes>
      </main>

      {/* Persistent footer with dynamic back-to-top feature */}
      <Footer />
    </div>
  );
}

export default App;
