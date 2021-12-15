import React from 'react';
import { Link } from 'react-router-dom';
import './main.css';
import logo from './logo.jpg';

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img className="logo" src={logo} alt="CALEB PARKS PHOTOGRAPHY" />
      </Link>
      <nav>
        <Link className="nav-link" to="/">GALLERY</Link>
        <Link className="nav-link" to="/about">ABOUT</Link>
        <Link className="nav-link" to="/contact">CONTACT</Link>
      </nav>
    </header>
  );
};

export default Header;
