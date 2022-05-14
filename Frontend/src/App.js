import { Button, TextField, Typography } from '@mui/material';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Home from './views/Home';
import Login from './views/Login';
import SignUp from './views/SignUp';
import Rendezvous from './views/Rendezvous';
import AddApointment from './views/AddApointment';
import { useState } from 'react';
// import Footer from './components/Footer';

function App() {

  return (

    <Router>
      <div>
        <Switch>
          
          <Route exact path='/'>
            <Home />
          </Route>

          <Route path='/Login'>
            <Login />
          </Route>

          <Route path='/SignUp'>
            <SignUp />
          </Route>

          <Route path='/Rendezvous'>
            <Rendezvous />
          </Route>

          <Route path='/AddApointment'>
            <AddApointment />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;