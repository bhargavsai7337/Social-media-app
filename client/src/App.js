import React from 'react';
import './App.css';
import navb from './components/navb';
import {Route,Link} from 'react-router-dom';
import profile from './components/profile';
import login from './components/login';
import register from './components/register';

function App() {
  return (
    <div className="App">
      <Route exact path="/profile" component={profile} />
      <Route exact path="/login" component={login} />
      <Route exact path="/register" component={register} />
    </div>
  );
}

export default App;
