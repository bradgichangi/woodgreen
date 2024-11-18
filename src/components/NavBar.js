import logo from '../images/wti_logo_circular.png';
import React, { useState } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    // State to toggle the menu visibility
    const [isOpen, setIsOpen] = useState(false);

    // Toggle function to open/close the menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navigate = useNavigate();

    const redirect = () => {
        navigate('/');
    };

    return (
        <header>
            <img src={logo} onClick={redirect} className="logo" alt="logo" />
            <div>
                <h1>Woodgreen Training Institute</h1>
            </div>

            <nav>
                <button className="hamburger" aria-label="Toggle Menu" onClick={toggleMenu}>
                    ☰
                </button>
                <ul className={isOpen ? 'show' : ''}>
                    <li>
                        <Link to="/" onClick={toggleMenu} className="nav-link">HOME</Link>
                    </li>
                    <li>
                        <Link to="/courses" onClick={toggleMenu} className="nav-link">COURSES</Link>
                    </li>
                    <li>
                        <Link to="/about" onClick={toggleMenu} className="nav-link">ABOUT</Link>
                    </li>
                    <li>
                        <Link to="/contact" onClick={toggleMenu} className="nav-link">CONTACT</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
