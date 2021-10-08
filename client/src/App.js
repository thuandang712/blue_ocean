
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import axios from 'axios';
import './App.css';


import Login from './components/login/Login';
import Tickets from './components/Tickets/Tickets';
import Entry from './pages/entry/Entry';
import Registration from "./pages/registration/registrationPage";
import PasswordOtpFormPage from './pages/password-reset/PasswordOtpFormPage';
import DefaultLayout from './layout/DefaultLayout';
import Dashboard from './pages/dashboard/Dashboard'




class App extends React.Component {
  state = {
    loading: false,
    techs: [],
    deleteTicket: [],
    singleTech: null
  }
  // async componentDidMount() {
  //   const result = await axios.get('/api/user')
  //   console.log(result)
  // };


  //   const getTech = async (id) => {
  //     this.setState({ loading: true })
  //     const res = await axios.get(`https://blue-ocean-ticketing-system.herokuapp.com/api/users/${id}`)
  //     this.setState({ singleTech: res.data })
  //     this.setState({ loading: false })
  //   }
  // }

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
            <Route exact path='/tickets'>
              <Tickets />
            </Route>
            <Route exact path='/password-reset'>
              <PasswordOtpFormPage />
            </Route>

            <Route exact path="/dashboard">
              <DefaultLayout>
                <Dashboard />
              </DefaultLayout>
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
