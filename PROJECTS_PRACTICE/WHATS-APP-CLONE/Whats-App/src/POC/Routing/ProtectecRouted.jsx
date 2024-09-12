import { Navigate } from "react-router-dom";

function ProtectedRoute(props) {
    const isLoggedin = props.isLoggedin;
    const children = props.children;
    if (!isLoggedin) {
      return <Navigate to="/login" />;
  }
  return children;
  }
  export default ProtectedRoute;