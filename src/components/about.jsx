import aboutImg from './../assets/about.jpg';

function About() {
  return (
    <section id="about" className="about-section">
      {/* Left Side: Image */}
      <img src={aboutImg} alt="About Me" className="about-image"/>
      
        
      <div className="about-content">
        <h2>About Me</h2>
        <p>I am eager to know how technologies work and dedicated to exploring the technology world. Passion drives my learning, and I embrace innovation.</p>
        
        {/* Social Media Icons */}
        <div className="social-icons">
          <a href="#"><img src="./../assets/facebook-icon.png" alt="Facebook"/></a>
          <a href="#"><img src="./../assets/twitter-icon.png" alt="Twitter"/></a>
          <a href="#"><img src="./../assets/linkedin-icon.png" alt="LinkedIn"/></a>
        </div>
      </div>
    </section>
  );
}

export default About;
