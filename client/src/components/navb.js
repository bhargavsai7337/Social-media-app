import React from "react";
import {Outlet,Link} from 'react-router-dom';
import context from "../context/context";
import { useContext, Fragment } from "react";

const navb=()=>{
  const { user } = useContext(context);

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
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          { user.authenticated ? authenticated : guest }
          <Link className="navbar-brand" to="/">social-mediaapp</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active" aria-current="page" to="/login">login</Link>
            <Link className="nav-link" to="/register">register</Link>
            <Link className="nav-link" to="/profile">Profile</Link>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  )

}

export default navb;