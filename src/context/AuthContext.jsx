import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [state, setState] = useState({
    isAuth: false,
    token: null,
  });

  function handleLogin(token) {
    setState({
      ...state,
      isAuth: true,
      token: token,
    });
    console.log(token);
  }

  function handleLogout() {
    setState({
      ...state,
      isAuth: false,
      token: null,
    });
  }

  return (
    <AuthContext.Provider value={{ state, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
