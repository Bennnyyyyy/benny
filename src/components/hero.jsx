import { useState, useEffect, useRef } from 'react';
import pic from './../assets/ben.jpg';
import "../styles/hero.css";
import { Link } from 'react-router-dom';

function Hero() {
  const [typedText, setTypedText] = useState('');
  const fullText = "A Web Designer";
  const [showButtons, setShowButtons] = useState(false);
  const heroRef = useRef(null);

  // Enhanced typing animation with variable speed
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.substring(0, i + 1));
        i++;
        // Randomize typing speed slightly for more natural feel
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

  // Smoother parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        heroRef.current.style.setProperty('--mouse-x', x);
        heroRef.current.style.setProperty('--mouse-y', y);
        
        // Add subtle tilt effect to image
        const tiltX = (y - 0.5) * 10;
        const tiltY = (0.5 - x) * 10;
        const imageWrapper = heroRef.current.querySelector('.image-wrapper');
        if (imageWrapper) {
          imageWrapper.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
                <Link to="/projects" className="primary-btn">
                  View My Work
                  <span className="hover-effect"></span>
                  <span className="btn-glow"></span>
                </Link>
                <Link to="/contact" className="secondary-btn">
                  Contact Me
                  <span className="hover-effect"></span>
                  <span className="btn-glow"></span>
                </Link>
              </div>
            )}
          </div>
          <div className="image-container">
            <div className="image-wrapper">
              <img src={pic} alt="Benladin Mohammad Dinin" className="profile-image" />
              <div className="image-border"></div>
              <div className="image-glow"></div>
              <div className="image-dots"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;