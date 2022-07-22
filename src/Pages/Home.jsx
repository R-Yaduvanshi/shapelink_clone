import React from "react";
import BodyBottom from "../components/BodyBottom";
import Challange from "../components/Challange";
import Header from "../components/Header";
import MobileImg from "../components/MobileImg";
import MobileImgLeft from "../components/MobileImgLeft";
import Workout from "../components/Workout";
import Login from "./Login";

const Home = () => {
  return (
    <>
      {/* <Login /> */}
      <Header />
      <MobileImg />
      <MobileImgLeft />
      <Workout />
      <Challange />
      <BodyBottom />
    </>
  );
};

export default Home;
