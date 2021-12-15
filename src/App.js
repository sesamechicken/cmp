import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header';
import HomeGallery from './components/homegallery';
import About from './components/about';
import Contact from './components/contact';
import { Footer } from './components/footer';
import './app.css';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route index path="/" element={<HomeGallery setActive />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} setActive />
      </Routes>
      <Footer />
    </React.Fragment>
  );
};

export default App;
