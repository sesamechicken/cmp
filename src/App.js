import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ReactGA from 'react-ga';
import Header from './components/header';
import HomeGallery from './components/homegallery';
import About from './components/about';
import Contact from './components/contact';
import { Footer } from './components/footer';
import './app.css';

class App extends React.Component {
  componentDidUpdate(prevProps) {
    const { location } = this.props;

    if (location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged = () => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  onRouteChanged = () => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render() {
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
  }
}

export default App;
