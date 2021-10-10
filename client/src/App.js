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



class App extends React.Component {


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
