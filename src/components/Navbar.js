import React, { useState } from 'react';
import "../styles/navbar.css";
import logo from "../components/Img/Navbarimg/navimg.png";
import { Link } from 'react-router-dom'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className={`navbar ${isMenuOpen ? 'h-class' : ''}`}>
                <div className="navbar-img">
                    <img src={logo} alt="" />
                    <h4><span>Aava</span><br /> Health Coach</h4>
                </div>
                <div className={`navlist ${isMenuOpen ? 'v-class' : ''}`}>
                    <ul>
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/diet">DIET PLANS</Link></li>
                        <li><Link to="/recipes">RECIPES</Link></li>
                        <li><Link to="/calorie">CALORIE CALCULATOR</Link></li>
                        <button className="nav-btn" ><Link to="/login">LOG IN</Link></button>
                        <button className="nav-btn"><Link to="/signup">SIGN UP</Link></button>
                    </ul>
                </div>
                <div className="hamburger" onClick={toggleMenu}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>
        </>
    );
}
