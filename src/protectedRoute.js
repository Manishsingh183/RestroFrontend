import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ childern, user }) => {
  return user ? childern : <Navigate to="/login"></Navigate>;
};
