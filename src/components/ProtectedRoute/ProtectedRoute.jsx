import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    // alert("You are not logged in, returning to home page.");
    return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectedRoute;