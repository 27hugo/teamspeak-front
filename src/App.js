import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginModalComponent from './components/login/LoginModalComponent';
import ClientChannelsComponent from './components/clients/ClientChannelsComponent';
import ChannelCreateComponent from './components/channels/ChannelCreateComponent';
import UpdateClientComponent from './components/clients/UpdateClientComponent';
import ChangePasswordComponent from './components/clients/ChangePasswordComponent';
import HomeComponent from './components/home/HomeComponent';
import FooterComponent from './components/footer/FooterComponent';
import NavbarComponent from './components/navbar/NavbarComponent';
import TokenService from './services/TokenService';
const token = new TokenService();
token.validateTokenTime();

function App() {

  return (
    <div>
      <div>
        <Router>
          <NavbarComponent/>
          <Route path="/" exact component={HomeComponent} />
          <Route path="/account/changepassword" exact component={ChangePasswordComponent} />
          <Route path="/account/update" exact component={UpdateClientComponent} />
          <Route path="/channels/create" exact component={ChannelCreateComponent} />
          <Route path="/channels" exact component={ClientChannelsComponent} />
          <Route path="/login" exact component={LoginModalComponent} />
        </Router>
      </div>
      <div style={{backgroundColor: "black", color: "white"}}>
        <FooterComponent/>
      </div>
    </div>
  );
}

export default App;
