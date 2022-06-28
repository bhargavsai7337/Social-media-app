import React from "react";
function login() {
  return (
    <div className="login">
        <h1>login page</h1>
      <form>
        <label for="uname">Username</label>
        <input type="email" placeholder="Username" name="uname" id="uname"></input><br></br>
        <label for="pwd">Password</label>
        <input type="password" placeholder="Password" id="pwd" name="pwd"></input><br></br>
        <input type="submit" value="login" id="btn"></input><br></br>
      </form>
    </div>
  );
}

export default login;