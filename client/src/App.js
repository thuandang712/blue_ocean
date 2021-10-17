import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';


import Entry from './pages/entry/Entry';
import Login from './components/login/Login';
import Registration from "./pages/registration/registrationPage";
import PasswordOtpFormPage from './pages/password-reset/PasswordOtpFormPage';
import DefaultLayout from './layout/DefaultLayout';
import Tech from './components/tech/Tech'
import AddTech from './components/tech/AddTech'
// import SingleTech from './components/tech/SingleTech'
import Tickets from './components/ticket/Tickets';
import AddTicket from './components/ticket/AddTicket';
import SingleTicket from './components/ticket/SingleTicket'



class App extends React.Component {


  render() {
    return (
      <div className="App" >
        <Router>
          <Switch>

            <Route exact path='/'>
              <Entry />
            </Route>

            <Route exact path='/login'>
              <Login />
            </Route>


            <Route exact path='/ticket'>
              <DefaultLayout>
                <Tickets />
              </DefaultLayout>
            </Route>


            <Route exact path='/add-ticket'>
              <DefaultLayout>
                <AddTicket />
              </DefaultLayout>
            </Route>


            <Route exact path="/ticket/:_id">
              <DefaultLayout>
                <SingleTicket />
              </DefaultLayout>
            </Route>


            <Route exact path='/tech'>
              <DefaultLayout>
                <Tech />
              </DefaultLayout>
            </Route>

            {/* <Route exact path='/tech/:_id'>
              <DefaultLayout>
                <SingleTech />
              </DefaultLayout>
            </Route> */}

            <Route exact path='/add-tech'>
              <DefaultLayout>
                <AddTech />
              </DefaultLayout>
            </Route>


            <Route exact path='/password-reset'>
              <PasswordOtpFormPage />
            </Route>

            <Route exact path="/register">
              <Registration />
            </Route>



          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
