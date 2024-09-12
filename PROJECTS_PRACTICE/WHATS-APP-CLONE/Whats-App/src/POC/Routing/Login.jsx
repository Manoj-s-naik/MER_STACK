import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../Firebase";
import { signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

function Login(props) {
  const setLoggedin = props.setLoggedin;
  const isLoggedin = props.isLoggedin;


if(isLoggedin){
  navigate("/")
  return
}

  const navigate = useNavigate();
  const handleLogin = async () => {
    const result = await signInWithPopup(auth,new GoogleAuthProvider);  
    setLoggedin(true);
    // alert("login")
    navigate("/");
  };

  return (
    <>
      <h1>Login Page</h1>
    <button type="button" onClick={handleLogin}>Login</button>
    </>
  );
}

export default Login;


