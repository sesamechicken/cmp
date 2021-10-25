import React from 'react';
import Header from './components/header';
import HomeGallery from './components/homegallery';
// import ConnectedComponent from './components/connected_component';
import './app.css';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <HomeGallery />
      {/* <ConnectedComponent /> */}
    </React.Fragment>
  );
};

export default App;
