import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeComponent from './components/home/HomeComponent';
import ChannelCreateComponent from './components/channels/ChannelCreateComponent';
import ClientChannelsComponent from './components/clients/ClientChannelsComponent';
import ClientInfoComponent from './components/clients/ClientInfoComponent';
import LoginComponent from './components/login/LoginComponent';
import Navbar from './components/navbar/NavbarComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route path="/" exact component={HomeComponent} />
        <Route path="/login" exact component={LoginComponent} />
        <Route path="/channelcreate" exact component={ChannelCreateComponent} />
        <Route path="/channelsclient" exact component={ClientChannelsComponent} />
        <Route path="/clientinfo" exact component={ClientInfoComponent} />
      </Router>
    </div>
  );
}

export default App;
