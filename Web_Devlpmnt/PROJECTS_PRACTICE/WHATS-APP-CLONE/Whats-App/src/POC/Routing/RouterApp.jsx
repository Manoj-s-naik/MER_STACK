import React, { useState } from "react";
import Login from "./Login";
import Home from "./Home";
import Chat from "./Chat";
import User from "../useEffect/User";
import ProtectedRoute from "./ProtectecRouted";
import { Routes, Route, Navigate } from "react-router-dom";

function RouterApp() {
  const [isLoggedin, setLoggedin] = useState(false);

  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute isLoggedin={isLoggedin}><Home setLoggedin={setLoggedin} /></ProtectedRoute>} />
      <Route path="/login" element={<Login setLoggedin={setLoggedin} />} />
      <Route path="/chat/uniqueChat" element={<ProtectedRoute isLoggedin={isLoggedin}><Chat /></ProtectedRoute>} />
      <Route path="/user" element={<ProtectedRoute isLoggedin={isLoggedin}><User /></ProtectedRoute>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RouterApp;
