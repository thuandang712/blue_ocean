import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';

import Entry from './pages/entry/Entry';
import Login from './components/login/Login';
import Registration from "./pages/registration/registrationPage";
import PasswordOtpFormPage from './pages/password-reset/PasswordOtpFormPage';
import Dashboard from './pages/dashboard/Dashboard'
import TechList from './components/tech/TechList'
import AddTech from './components/tech/AddTech'
import SingleTech from './components/tech/SingleTech'
import Tickets from './components/ticket/Tickets';
import AddTicket from './components/ticket/AddTicket';
import SingleTicket from './components/ticket/SingleTicket'



class App extends React.Component {


  render() {
    return (
      <div className="App" >
        <Router>
          <Switch>
            <Route exact path='/' component={Entry}></Route>
            <Route exact path='/login' component={Login}></Route>

            <Route exact path='/dashboard' component={Dashboard}></Route>

            <Route exact path='/ticket' component={Tickets}></Route>
            <Route exact path='/add-ticket' component={AddTicket}></Route>
            <Route exact path="/ticket/edit/:_id" component={SingleTicket}></Route>

            <Route exact path='/tech' component={TechList}></Route>
            <Route exact path='/add-tech' component={AddTech}></Route>
            <Route exact path='/tech/edit/:_id' component={SingleTech}></Route>

            <Route exact path='/password-reset' component={PasswordOtpFormPage}></Route>
            <Route exact path="/register" component={Registration}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
