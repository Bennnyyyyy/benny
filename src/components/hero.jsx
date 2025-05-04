import { useState, useEffect, useRef } from 'react';
import pic from './../assets/ben.jpg';
import "../styles/hero.css";

function Hero() {
  const [typedText, setTypedText] = useState('');
  const fullText = "A Web Designer";
  const [showButtons, setShowButtons] = useState(false);
  const heroRef = useRef(null);
  const imageWrapperRef = useRef(null);

  // Typing animation
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.substring(0, i + 1));
        i++;
        const speed = Math.random() * 50 + 80;
        clearInterval(typingInterval);
        setTimeout(() => {
          const newInterval = setInterval(() => {
            if (i < fullText.length) {
              setTypedText(fullText.substring(0, i + 1));
              i++;
            } else {
              clearInterval(newInterval);
              setShowButtons(true);
            }
          }, speed);
        }, 100);
      }
    }, 150);
    return () => clearInterval(typingInterval);
  }, []);

  // 3D Parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current && imageWrapperRef.current) {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        heroRef.current.style.setProperty('--mouse-x', x);
        heroRef.current.style.setProperty('--mouse-y', y);
        
        const tiltX = (y - 0.5) * 15;
        const tiltY = (0.5 - x) * 15;
        imageWrapperRef.current.style.transform = `
          perspective(1000px) 
          rotateX(${tiltX}deg) 
          rotateY(${tiltY}deg)
          scale(1.03)
        `;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div id="home" className="hero" ref={heroRef}>
      <div className="hero-overlay"></div>
      <div className="particle-overlay"></div>
      <div className="hero-container">
        <div className="content">
          <div className="text-content">
            <h1 className="name-title">
              <span className="greeting">Hello,</span>  <span className="highlight"> I'm Benladin</span>
            </h1>
            <h2 className="profession">
              {typedText}
              <span className="cursor">|</span>
            </h2>
            <p className="description">
              Crafting modern, responsive, and user-centric digital experiences 
              that drive business growth in the digital landscape.
            </p>
            {showButtons && (
              <div className="button-container">
                <button onClick={() => scrollToSection('projects')} className="primary-btn">
                  View My Work
                  <span className="hover-effect"></span>
                  <span className="btn-glow"></span>
                </button>
                <button onClick={() => scrollToSection('contact')} className="secondary-btn">
                  Contact Me
                  <span className="hover-effect"></span>
                  <span className="btn-glow"></span>
                </button>
              </div>
            )}
          </div>
          <div className="image-container">
            <div className="image-frame">
              <div className="frame-decoration top-left"></div>
              <div className="frame-decoration top-right"></div>
              <div className="frame-decoration bottom-left"></div>
              <div className="frame-decoration bottom-right"></div>
              <div className="image-wrapper" ref={imageWrapperRef}>
                <img src={pic} alt="Benladin Mohammad Dinin" className="profile-image" />
                <div className="image-glow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;