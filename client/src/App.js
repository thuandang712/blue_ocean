import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import Login from './components/Login';
import Entry from './pages/Entry'

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
      </Router>
    </div>

  );
}

export default App;
