// import React, { createContext, useState } from "react";
// import Chat from "./Components/Chat";
// import Home from "./Components/Home";
// import Login from "./Components/Login";
// import PageNotfound from "./Components/PageNotfound";
// import { Route, Routes } from "react-router-dom";
// import Home from "./POC/Props_advance/ThemeChange/Home";
// import PageNotFound from "./POC/Props_advance/ThemeChange/PageNotFound";
// import "../../Whats-App/src/App.css";
// import ThemeWrapper from "./POC/Props_advance/ThemeChange/ThemeContext";

// import { useDarkTheme } from "./POC/Props_advance/ThemeChange/ThemeContext";

// function App() {
//   const { handleToggleTheme } = useDarkTheme();
//   return (
//     <>
//       <div>App Components</div>

//     <button onClick={handleToggleTheme}>toggleTheme</button> 
//  <ThemeWrapper> 
//       <Routes>
        {/* <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/chat/:uniqueChat" element={<Chat></Chat>}></Route>
        <Route path="*" element={<PageNotfound></PageNotfound>}></Route> */}
        {/* <Route path="/" element={<Home></Home>}></Route> 
     <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
      </ThemeWrapper>
    </>
  );
}

export default App; */}


import React, { useState } from "react";
import Chat from "./Components/Chat";
import Home from "./Components/Home";
import Login from "./Components/Login";
import PageNotfound from "./Components/PageNotfound";
import ProtectedRoute from "./POC/Routing/ProtectecRouted";
import { Route, Routes } from "react-router-dom";
import "../../Whats-App/src/App.css";

function App() {
  const [isLoggedin,setLoggedin]=useState(false)
  return (
    <>
      <Routes>
      <Route path="/" element={<ProtectedRoute isLoggedin={isLoggedin}><Home setLoggedin={setLoggedin} /></ProtectedRoute>} />
      <Route path="/login" element={<Login setLoggedin={setLoggedin}/>} />
      <Route path="/chat/uniqueChat" element={<ProtectedRoute isLoggedin={isLoggedin}><Chat /></ProtectedRoute>} />
      <Route path="*" element={<PageNotfound />} />
    </Routes>
  
    </>
  );
}

export default App;
