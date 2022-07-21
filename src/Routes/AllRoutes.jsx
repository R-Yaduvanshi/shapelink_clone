import React from "react";
import { Route, Routes } from "react-router-dom";
import Contacts from "../Pages/Contacts";
import GetTheApp from "../Pages/GetTheApp";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/get-the-app" element={<GetTheApp />} />
      <Route path="/contact" element={<Contacts />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default AllRoutes;
