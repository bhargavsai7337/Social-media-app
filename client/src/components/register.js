import React from "react";
import { fetchData } from "../main.js";
import { useNavigate } from "react-router-dom";
import { useContext} from "react";
import UserContext from "../context/context.js";

const Register = () => {
  const navigate = useNavigate();

  

  const {user, updateUser} = useContext(UserContext);

  const {username, password, password2} = user;  

  const onChange = (e) => updateUser(e.target.name, e.target.value)

  const onSubmit = (e) => {
    e.preventDefault();

    fetchData("/user/register", 
      {
       username,
       password
      }, 
      "POST")
    .then((data) => {
      if(!data.message) {
        updateUser("authenticated", true)
        navigate("/home")
      }
    })  
    .catch((error) => {
      console.log(error)
    })
  }
  return (
    <div className="register">
        <h1>Register page</h1>
      <form>
        <label for="uname" htmlFor="username">Enter username</label>
        <input type="text" placeholder="Username" name="uname" id="uname" onChange={onChange} value={username}></input><br></br>
        <label for="pwd" htmlFor="password">Enter Password</label>
        <input type="password" placeholder="Password" id="password" name="password" onChange={onChange} value={password}></input><br></br>
        <label for="pwd" htmlFor="password2">Enter Password</label>
        <input type="password" placeholder="Password" id="password2" name="password2" onChange={onChange} value={password2}></input><br></br>
        <input type="submit" value="submit" id="btn"></input><br></br>
      </form>
    </div>
  );
}

export default Register;