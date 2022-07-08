import React from "react";
import { fetchData,deleteData} from "../main.js";
import {useState} from "react";

function Profile() {
 
  
  const [ setLoading] = useState(false);  
  const [text] = useState("");
  const [posts, setPosts] = useState([]);

  const addPost = () => {
   

    fetchData("/user/profile", 
      {
       text
      }, 
      "POST")
    .then((data) => {
      setPosts([...posts,data]);
    })  
    .catch((error) => {
      console.log(error)
    })
  }
  const deletePost=(id)=>{
    setLoading(true);
    deleteData(`/posts/${id}`,"DELETE")
      .then((data) => {
       let  filtredData=posts.filter((post)=>{
          return post._id !==id
        })
        setPosts(filtredData)

        setLoading(false);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
   

  
  return (
    <div className="profile">
      <h1>profile page</h1>
      <p>welcome back</p>
      <div className="container">
        <div className="col">
          <h1>Chats</h1>
        </div>
        <div className="col">
          <h1>story</h1>
        </div>
        <div className="col post">
          <h1>posts</h1>
        </div>
      </div>
      <div htmlFor="post" className="container">
        <button className="btn btn-danger" onClick={()=>{deletePost(posts._id)}}>Delete
        </button>

        <button className="btn btn-primary"   onSubmit={(e) => {
                  e.preventDefault();
                  addPost();}}>Add a post
        </button>

        
      </div>
    </div>
  );
}


export default Profile;