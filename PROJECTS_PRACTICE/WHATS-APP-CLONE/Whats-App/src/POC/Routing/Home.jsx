import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../../Firebase";

function Home(props) {
  const setLoggedin = props.setLoggedin;
  const navigate = useNavigate();
  const handleLogout = async () => {
    setLoggedin(false);
    await signOut(auth);
    navigate("/login");
  };
  
  

  return (
    <>
      <h1>Homepage</h1>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}

export default Home;
