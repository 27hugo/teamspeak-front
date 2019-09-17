import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginModalComponent from './components/login/LoginModalComponent';
import ClientChannelsComponent from './components/clients/ClientChannelsComponent';
import ChannelCreateComponent from './components/channels/ChannelCreateComponent';
import HomeComponent from './components/home/HomeComponent';

function App() {
  return (
    <div>
      <Router>
        <Route path="/" exact component={HomeComponent} />
        <Route path="/channels/create" exact component={ChannelCreateComponent} />
        <Route path="/channels" exact component={ClientChannelsComponent} />
        <Route path="/login" exact component={LoginModalComponent} />
      </Router>
    </div>
  );
}

export default App;
