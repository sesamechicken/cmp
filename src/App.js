import React from 'react';
import Main from './components/main';
// import ConnectedComponent from './components/connected_component';
import './app.css';

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <Main />
        {/* <ConnectedComponent /> */}
      </div>
    );
  }
}

export default App;
