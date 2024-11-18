import logo from './images/wti_logo.png';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Contact from './pages/Contact';
import Navbar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (<div>
    
    <Navbar />
    <div className='main'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
    <footer>
      <div className="footer-div">
        <h4>Woodgreen Training Institute</h4>
        <p>Skills For Life</p>
      </div>
      <div className="footer-div">
        <h4>Contacts</h4>
        <p>Tel: +254 775 160 079</p>
        <p>Tel: +254 717 592 373</p>
        <p>Email: example@email.com</p>
        <p>P.O. Box: 7635-00300 NBI</p>
      </div>

    </footer>
  </div>
  );
}

export default App;
