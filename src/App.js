import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginComponent from './components/login/LoginComponent';


function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/login" exact component={LoginComponent} />
      </Router>
    </div>
  );
}

export default App;
