// src/App.jsx
import { useEffect } from 'react';
import Nav from './components/Nav';
import Hero from './components/hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Blog from './pages/Blog';  // Your existing Blog component
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  // Handle scroll to section when URL hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Check hash on initial load
    handleHashChange();
    
    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <>
      <Nav />
      
      {/* Main scrollable content */}
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="experience">
          <Experience />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="blog">
          <Blog />  {/* Your blog content now scrolls with the page */}
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      <Footer />
    </>
  );
}

export default App;