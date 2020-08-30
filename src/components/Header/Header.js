import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './Header.css';

const Header = () => {

    const [show, setShow] = useState(false); 
    



    return (
        <header>
            <nav className="navbar">
                <a href="#projects">Projects</a>
                <a href="#about-me">About</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
}



  
export default Header;