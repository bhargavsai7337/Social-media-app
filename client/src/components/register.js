import React from "react";
function register() {
  return (
    <div className="register">
        <h1>Register page</h1>
      <form>
        <label for="uname">Enter username</label>
        <input type="email" placeholder="Username" name="uname" id="uname"></input><br></br>
        <label for="pwd">Enter Password</label>
        <input type="password" placeholder="Password" id="pwd" name="pwd"></input><br></br>
        <input type="submit" value="login" id="btn"></input><br></br>
      </form>
    </div>
  );
}

export default register;