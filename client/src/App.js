import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
<<<<<<< HEAD
import Login from './components/Login';
import Tickets from './components/Tickets/Tickets';
import Entry from './pages/Entry'
=======
import Login from './components/login/Login';
import Entry from './pages/entry/Entry';
// import { PasswordOtpForm } from './pages/password-reset/PasswordOtpFormPage';
>>>>>>> da06160b17569fd629ce534598b8da64d8506632

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
<<<<<<< HEAD
        <Route exact path='/ticket'>
          <Tickets />
        </Route>
=======
        {/* <Route exact path = '/password-reset'>
          <PasswordOtpForm /> 
        </Route> */}
>>>>>>> da06160b17569fd629ce534598b8da64d8506632
      </Router>
    </div>

  );
}

export default App;
