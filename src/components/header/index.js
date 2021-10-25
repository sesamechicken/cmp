import React from 'react';
import Menu from '../menu';
import './main.css';
import logo from './logo.jpg';

const Header = () => {
  return (
    <header>
      <img className="logo" src={logo} alt="CALEB PARKS PHOTOGRAPHY" />
      {/* <Menu /> */}
    </header>
  );
};

export default Header;
