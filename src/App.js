import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginModalComponent from './components/login/LoginModalComponent';
import ClientChannelsComponent from './components/clients/ClientChannelsComponent';


function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/channels" exact component={ClientChannelsComponent} />
        <Route path="/login" exact component={LoginModalComponent} />
      </Router>
    </div>
  );
}

export default App;
