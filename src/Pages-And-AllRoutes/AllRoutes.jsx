import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import GetTheApp from "./GetTheApp";
import Contact from "./Contact";
import Login from "./Login";
import Signup from "./Signup";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/get-the-app" element={<GetTheApp />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
    </Routes>
  );
};

export default AllRoutes;
