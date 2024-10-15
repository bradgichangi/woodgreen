import logo from './images/wti_logo.png';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (<Router>
    <header>
      <img src={logo} className="logo" alt="logo" />
      <div>
        <h1>Woodgreen Training Institute</h1>
      </div>

    <nav>
      <ul>
        <li>
          <Link to="/" className="nav-link">HOME</Link>
        </li>
        <li>
          <Link to="/courses" className="nav-link">COURSES</Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">ABOUT</Link>
        </li>
        <li>
          <Link to="/contact" className="nav-link">CONTACT</Link>
        </li>
      </ul>
      </nav>
    </header>


    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <footer>
      <div></div>
      <div>
        Tel: +254 775 160 079
        Tel: +254 717 592 373
        P.O. Box: 7635-00300 NBI
      </div>

    </footer>
  </Router>
  );
}

export default App;
