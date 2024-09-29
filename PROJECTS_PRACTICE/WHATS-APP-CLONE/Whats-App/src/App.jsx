import React, { useState } from "react";
import ChatWindow from "./Components/ChatWindow";
import Home from "./Components/Home";
import Login from "./Components/Login";
import PageNotfound from "./Components/PageNotfound";
import ProtectedRoute from "./POC/Routing/ProtectecRouted"
import { Route, Routes } from "react-router-dom";
import "../../Whats-App/src/App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/login" element={<Login  />} />
        <Route path="/:chatid" element={ <ProtectedRoute > <Home /> </ProtectedRoute> } />
        <Route path="*" element={<PageNotfound />} />
      </Routes>
    </>
  );
}

export default App;
