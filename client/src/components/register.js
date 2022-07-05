import React from "react";
const register = () => {
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
        navigate("/books")
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