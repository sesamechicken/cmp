import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReactGA from 'react-ga';
import store from './redux/store';
import App from './App';

if (module.hot) {
  module.hot.accept();
}

ReactGA.initialize('UA-215537449-1');
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
