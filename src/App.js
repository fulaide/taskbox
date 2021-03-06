import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './lib/redux';

import InboxScreen from './components/InboxScreen';

// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <InboxScreen />
        
        {/* <div className="App">
            <img src={logo} className="App-logo" alt="logo" />
        </div> */}
      </Provider>
      
    );
  }
}

export default App;
