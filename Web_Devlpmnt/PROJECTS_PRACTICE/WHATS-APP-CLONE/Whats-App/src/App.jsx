import React from "react";
import Chat from "./Components/Chat";
import Home from "./Components/Home";
import Login from "./Components/Login";
import PageNotfound from "./Components/PageNotfound";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/chat/:uniqueChat" element={<Chat></Chat>}></Route>
        <Route path="*" element={<PageNotfound></PageNotfound>}></Route>
      </Routes>
    </>
  );
}

export default App;