import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home.js";
import Login from "./components/login";
import Navb from './components/navb.js';
import Register from './components/register.js'
import Profile from './components/profile.js'
import { UserProvider } from './context/context.js';



function App() {
  return (
    <div className="App">
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Navb />}>
              <Route index element={<Home />}/>
              <Route path="profile" element={<Profile />}/>
              <Route path="login" element={<Login />}/>
              <Route path="register" element={<Register />}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>

    </div>
  );
}

export default App;