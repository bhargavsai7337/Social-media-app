import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import home from "./components/home.js";
import login from "./components/login";
import navb from './components/navb.js';
import register from './components/register.js'
import profile from './components/profile.js'
import { UserProvider } from './context/context.js';



function App() {
  return (
    <div className="App">
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<navb />}>
              <Route index element={<home />}/>
              <Route path="profile" element={<profile />}/>
              <Route path="login" element={<login />}/>
              <Route path="register" element={<register />}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>

    </div>
  );
}

export default App;