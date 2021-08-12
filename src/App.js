import React from 'react';
import './App.css'
import Header from './components/Header/Header'
import Security from './pages/Security/Security'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import Signup from './pages/Signup/Signup'
import Message from './pages/Message/Message'
import New from './pages/New/New'
import Dashboard from './pages/Dashboard/Dashboard'
import page404 from './pages/page404/page404'
import {Switch, Route} from 'react-router-dom'



function App() {
  return (
    <React.Fragment>
        <Header/>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={Signup} />
          <Route path="/new" component={New}/>
          <Route path="/message" component={Message}/>
          <Route path="/security" component={Security}/>
          <Route component={page404}/>
        </Switch>
    </React.Fragment>
  )
}

export default App; 
