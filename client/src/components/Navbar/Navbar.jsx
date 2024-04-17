import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using react-router for navigation
import './Navbar.css'; // Import your CSS for styling

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
<>
        <nav className="navbar">
           <div className="logoContainer">
            <h2 className="logo">Sharon White | Therapeutic Services</h2> 
            </div>
            <div className="linkContainer">
            <div className={`nav-links ${isOpen && 'open'}`}>
                <Link to="/about">ABOUT</Link>
                <Link to="/services">SERVICES</Link>
                <Link to="/contact">CONTACT</Link>
            </div>
            </div>
            <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </nav>

       
      
</>
    );
};

export default Navbar;