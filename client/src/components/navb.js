import React from "react";
import login from './login';
import register from './register';
import profile from "./profile";
import {Outlet,Link} from 'react-router-dom';

const navb=()=>{
  const { user } = useContext(UserContext);

  const authenticated = (
    <Fragment>
      <h2>Hi, { user.username } </h2>
    </Fragment>
  )

  const guest = (
    <Fragment>
      <h2>Welcome! </h2>
    </Fragment>
  )

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
      <Outlet />
    </div>
  )

}

export default navb;