import React from 'react';
import './main.css';
import logo from './logo.jpg';

const Header = () => {
  return (
    <header>
      <img className="logo" src={logo} alt="CALEB PARKS PHOTOGRAPHY" />
    </header>
  );
};

export default Header;
