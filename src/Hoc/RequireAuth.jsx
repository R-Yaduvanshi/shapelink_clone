import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const RequireAuth = ({ children }) => {
  const { state } = useContext(AuthContext);
  if (state.isAuth) {
    return children;
  } else {
    return <Navigate to="/signup" />;
  }
};

export default RequireAuth;
