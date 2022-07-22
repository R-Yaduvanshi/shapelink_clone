import React from "react";
import { Route, Routes } from "react-router-dom";
import Contacts from "../Pages/Contacts";
import GetTheApp from "../Pages/GetTheApp";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import TermsCondition from "../Pages/TermsCondition";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/get-the-app" element={<GetTheApp />} />
      <Route path="/contact" element={<Contacts />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/terms&condition" element={<TermsCondition />} />
    </Routes>
  );
};

export default AllRoutes;
