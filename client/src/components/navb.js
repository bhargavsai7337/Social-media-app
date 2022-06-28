import React from "react";
import login from './login';
import register from './register';
import profile from "./profile";
import {Route,Link} from 'react-router-dom';

function navb(){
  return(
    <div className="row">
      <div className="col">
      <Link to="/profile">profile</Link>
      </div>
      <div>
     <Link to="/login">login</Link>
      </div>
      <div>
      <Link to="/register">register</Link>
      </div>
    </div>
  )

}

export default navb;