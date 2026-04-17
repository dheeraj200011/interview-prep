import React from "react";
import { Navigate } from "react-router-dom";

// protected route ke andar jo component hinge wo children ke form ame aayenge
const RequireAuth = ({ children }) => {
  const loggedIn = localStorage.getItem("loggedIn");

  if (!loggedIn) {
    <Navigate to="/login" />;
  }

  return children;
};

export default RequireAuth;
