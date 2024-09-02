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
  const visitChat = () => {
    setLoggedin(true);
    navigate("/chat/uniqueChat");
  };
  const visitUser = () => {
    setLoggedin(true);
    navigate("/user");
  };

  return (
    <>
      <h1>Homepage</h1>
      <button onClick={visitChat}>Chat</button>
      <button onClick={visitUser}>User</button>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}

export default Home;
