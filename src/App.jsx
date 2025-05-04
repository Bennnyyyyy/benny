// src/App.jsx
import { useState } from 'react';
import Nav from './components/nav';
import Hero from './components/hero';
import About from './components/about';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  const [viewingPost, setViewingPost] = useState(null);

  // Handle scroll to section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Nav scrollToSection={scrollToSection} />
      
      <main>
        <section id="home">
          <Hero scrollToSection={scrollToSection} />
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
          {viewingPost ? (
            <BlogPost 
              post={viewingPost} 
              onBack={() => {
                setViewingPost(null);
                scrollToSection('blog');
              }} 
            />
          ) : (
            <Blog onViewPost={setViewingPost} />
          )}
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