import React from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import LoginForm from './pages/LoginForm/LoginForm';
import RegisterForm from './pages/RegisterForm/RegisterForm';
import Navbar from './components/Navbar/Navbar';
import Roles from './pages/Roles/Roles';
import Home from './pages/Home/Home';

function App() {
  return (
    <>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/register" component={RegisterForm} />
        <Route exact path="/roles" component={Roles} />
      </Switch>
    </>
  );
}

export default App;
