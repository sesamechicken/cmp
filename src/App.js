import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header';
import HomeGallery from './components/homegallery';
import ConnectedComponent from './components/connected_component';
import { Footer } from './components/footer';
import './app.css';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<HomeGallery />} />
        <Route path="/turds" element={<ConnectedComponent />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
};

export default App;
