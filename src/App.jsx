// src/App.jsx
import { Routes, Route } from 'react-router-dom';  // Import Routes and Route from react-router-dom
import Nav from './components/Nav';  // Import the Nav component
import Hero from './components/hero';  // Import the Hero component
import About from './components/About';  // Import the About component
import Projects from './components/Projects';  // Import the Projects component
import Experience from './components/Experience';  // Import the Experience component
import Blog from './pages/Blog';  // Import the Blog page component
import BlogPost from './pages/BlogPost';  // Import the BlogPost page component
import Contact from './pages/Contact';  // Import the Contact page component
import Footer from './components/Footer';  // Import the Footer component

function App() {
  return (
    <>
      <Nav />  {/* Navigation bar */}
      <Routes>
        {/* Define routes for each page */}
        <Route path="/" element={<><Hero /><About /><Experience /><Projects /></>} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />  {/* Route to display individual blog post */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />  {/* Footer */}
    </>
  );
}

export default App;  // Export App component for use in index.js
