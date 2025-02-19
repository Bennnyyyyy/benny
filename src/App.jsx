import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Hero from './components/hero.jsx';
import About from './components/about.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div> {/* ✅ Wrapped components in a div for proper structure */}
      <Hero />
      <About />
    </div>
  );
}

export default App;
