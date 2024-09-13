import React, { useState } from "react";
import { Fingerprint, LogIn as LoginIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../Firebase";
import { signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

const createUser = async (authData) => {
  const userObject = authData.user;
  // const id = userObject.uid;
  // const photURL = userObject.photoURL;
  // const name = userObject.displayName;
  // const email = userObject.email;
  // console.log(userObject,id,photUrl,name,email);
  const { uid, photoURL, displayName, email } = userObject;

  await setDoc(doc(db, "users", uid), {
    email:email,
    profile_pic: photoURL,
    name: displayName,
  });
  console.log("user data added");
};

function Login(props) {
  const setLoggedin = props.setLoggedin;

  const navigate = useNavigate();
  const handleLogin = async () => {
    const userData = await signInWithPopup(auth, new GoogleAuthProvider());
    // console.log(userData);
    createUser(userData);
    setLoggedin(true);
    // alert("login")
    navigate("/");
  };

  return (
    <>
      <div className="h-[220px] bg-primary">
        <div className="flex ml-[200px] pt-10 items-center gap-4">
          <img
            src="https://whatsapp-clone-826a9.web.app/whatsapp.svg"
            alt=""
            className="h-8"
          />
          <div className="text-white uppercase font-medium">Whatsapp</div>
        </div>
      </div>
      <div className="h-[calc(100vh-220px)] bg-background flex justify-center items-center relative">
        <div className="h-[80%] w-[50%] bg-white shadow-2xl flex flex-col gap-4 justify-center items-center absolute -top-[93px]">
          <Fingerprint className="h-20 w-20 text-primary" strokeWidth={1} />
          <div className="text-2xl font-medium mb-2">Sign In</div>
          <div className="text-xs font-light text-slate-500 text-center">
            Sign in with your google account <br />
            to get started.
          </div>
          <button
            onClick={handleLogin}
            className="flex gap-2 items-center bg-primary p-4 text-white rounded-[5px]"
          >
            <div>Sign in with Google</div>
            <LoginIcon />
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
