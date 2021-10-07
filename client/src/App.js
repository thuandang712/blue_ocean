
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from 'axios';
import './App.css';


import Login from './components/login/Login';
import Tickets from './components/Tickets/Tickets';
import Entry from './pages/entry/Entry';
import Registration from "./pages/registration/registrationPage";

import PasswordOtpFormPage from './pages/password-reset/PasswordOtpFormPage';
import { DefaultLayout } from './layout/DefaultLayout';

class App extends React.Component {
  state = {
    loading: false,
    techs: [],
    deleteTicket: [],
    singleTech: null
  }


  async componentDidMount () {
    this.setState({loading: true})
    const res = await axios.get("https://blue-ocean-ticketing-system.herokuapp.com/api/users")
    this.setState({loading: false, techs: res.data})



    const getTech = async (id) => {
    this.setState({loading: true})
    const res = await axios.get(`https://blue-ocean-ticketing-system.herokuapp.com/api/users/${id}`)
    this.setState({singleTech: res.data})
    this.setState({loading: false})
    }
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
    }
  }



export default App;
