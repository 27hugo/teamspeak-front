import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginModalComponent from './components/login/LoginModalComponent';
import ClientChannelsComponent from './components/clients/ClientChannelsComponent';
import ChannelCreateComponent from './components/channels/ChannelCreateComponent';
import UpdateClientComponent from './components/clients/UpdateClientComponent';
import ChangePasswordComponent from './components/clients/ChangePasswordComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/account/changepassword" exact component={ChangePasswordComponent} />
        <Route path="/account/update" exact component={UpdateClientComponent} />
        <Route path="/channels/create" exact component={ChannelCreateComponent} />
        <Route path="/channels" exact component={ClientChannelsComponent} />
        <Route path="/login" exact component={LoginModalComponent} />
      </Router>
    </div>
  );
}

export default App;
