import React from 'react';
import Header from './components/header';
import HomeGallery from './components/homegallery';
import { Footer } from './components/footer';
import './app.css';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <HomeGallery />
      <Footer />
    </React.Fragment>
  );
};

export default App;
