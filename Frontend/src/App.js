import { Button, TextField, Typography } from '@mui/material';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Home from './views/Home';
import Login from './views/Login';
import SignUp from './views/SignUp';
import Rendezvous from './views/Rendezvous';
import AddApointment from './views/AddApointment';
import { useEffect, useState } from 'react';
import GetAppointments from './views/GetAppointments';
// import Footer from './components/Footer';

function App() {

  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(()=>{
    if(localStorage.getItem('myCode'))
    {
      setLoggedIn(true)
    }
  }, [])

  return (

    <Router>
      <div>
        <Switch>
          
          <Route exact path='/'>
            {loggedIn ?
              <Rendezvous />
              :
              <Home />
            }
          </Route>

          <Route path='/Login'>
            {loggedIn ?
              <Rendezvous />
              :
              <Login />
            }
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

          <Route to='/getAppointments'>
            <GetAppointments />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;