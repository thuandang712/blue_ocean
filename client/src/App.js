const express = require('express');
const app = express();
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
// import Login from './components/login';
import Tickets from './components/Tickets/Tickets';
// import Entry from './pages/Entry'
import Login from './components/login/Login';
import Entry from './pages/entry/Entry';
// import { PasswordOtpForm } from './pages/password-reset/PasswordOtpFormPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/'>
          <Entry />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/ticket'>
          <Tickets />
        </Route>
        {/* <Route exact path = '/password-reset'>
          <PasswordOtpForm /> 
        </Route> */}
      </Router>
    </div>

  );
}

export default App;
