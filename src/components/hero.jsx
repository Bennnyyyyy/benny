import pic from './../assets/ben.jpg';

function Hero() {
  return (
    <div className="hero">
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <div className="hero-container">
        <div className="content">
          <div className="image-container">
            <img src={pic} alt="Benladin Mohammad Dinin" />
          </div>
          <div className="button-container"> 
            <button>Click Me</button>
          </div>
          <div className="text-container">
            <h1>Hello Minnasan, <span className="name">Benladin</span> Mohammad Dinin</h1>
            <h3>A Multimedia Promax</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;