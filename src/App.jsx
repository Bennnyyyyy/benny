
import Hero from './components/hero.jsx';
import About from './components/about.jsx';
import Navbar from './components/nav.jsx';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
     <Navbar /> 
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
