import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';


import Entry from './pages/entry/Entry';
import Login from './components/login/Login';
import Dashboard from './pages/dashboard/Dashboard'
import Tech from './components/tech/Tech'
import Tickets from './components/ticket/Tickets';
import DefaultLayout from './layout/DefaultLayout';
import Registration from "./pages/registration/registrationPage";
import PasswordOtpFormPage from './pages/password-reset/PasswordOtpFormPage';
import AddTechForm from './components/tech/AddTechForm';
import SingleTech from './components/tech/SingleTech'



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

            <Route exact path="/dashboard">
              <DefaultLayout>
                <Dashboard />
              </DefaultLayout>
            </Route>

            <Route exact path='/ticket'>
              <DefaultLayout>
                <Tickets />
              </DefaultLayout>
            </Route>

            <Route exact path='/tech'>
              <DefaultLayout>
                <Tech />
              </DefaultLayout>
            </Route>

            <Route exact path='/tech/:_id'>
              <DefaultLayout>
                <SingleTech />
              </DefaultLayout>
            </Route>

            <Route exact path='/add-tech'>
              <DefaultLayout>
                <AddTechForm />
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
