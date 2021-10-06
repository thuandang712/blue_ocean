
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from 'axios';
import './App.css';

// import Login from './components/Login';
// import Tickets from './components/Tickets/Tickets';
// import Entry from './pages/Entry'

import Login from './components/login/Login';
import Tickets from './components/Tickets/Tickets';
import Entry from './pages/entry/Entry';

import PasswordOtpFormPage from './pages/password-reset/PasswordOtpFormPage';



class App extends React.Component {
  async componentDidMount() {
    const result = await axios.get('/api/user')
    console.log(result)

  }

  render() {
    return (
      <div className="App" >
        <Router>
          <Route exact path='/'>
            <Entry />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>

          <Route exact path='/password-reset'>
            <PasswordOtpFormPage />
          </Route>

        </Router>
      </div>

    );
  }
}
export default App;
