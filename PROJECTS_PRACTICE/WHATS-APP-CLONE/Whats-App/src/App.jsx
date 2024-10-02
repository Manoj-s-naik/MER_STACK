
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login"
import PageNotFound from "./Components/PageNotFound";
import Home from "./Components/Home";
import ProtectedRoute from "./Components/ProtectecRouted";

function App() {
 
  return (
    <>
      <Routes>
        <Route path="/" element={<ProtectedRoute>
          <Home ></Home>
        </ProtectedRoute>}></Route>

      <Route path="/:chatid" element={
          <ProtectedRoute><Home></Home></ProtectedRoute>
        }></Route>

        <Route path="/login" element={<Login ></Login>}></Route>
        <Route path="*" element={< PageNotFound />} />
      </Routes>
    </>
  )
}

export default App
