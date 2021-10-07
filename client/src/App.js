
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import axios from 'axios';
import './App.css';


import Login from './components/login/Login';
import Tickets from './components/Tickets/Tickets';
import Entry from './pages/entry/Entry';
import Registration from "./pages/registration/registrationPage";

import PasswordOtpFormPage from './pages/password-reset/PasswordOtpFormPage';
import { DefaultLayout } from './layout/DefaultLayout';



class App extends React.Component {
  async componentDidMount() {
    //   const result = await axios.get('/api/user')
    //   console.log(result)

    // };
  };


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
          <Route exact path='/tickets'>
            <Tickets />
          </Route>
          <Route exact path='/password-reset'>
            <PasswordOtpFormPage />
          </Route>


          <Route exact path="/register">
            <Registration />
          </Route>

          <Route exact path='/defaultlayout'>
            <DefaultLayout />
          </Route>
          

        </Router>
      </div>
    );
  };
};
export default App;
