import React from "react";
import { Button } from "@chakra-ui/react";
import btnstyle from "../css/style.module.css";

const ButtonBtn = () => {
  return (
    <Button
      className={btnstyle.btn2}
      bgGradient="linear(to-r, #5a3bdb, #75c6ec)"
      borderRadius="25px"
      color="white"
      _hover={{
        bgGradient: "linear(to-r, #5a3bdb, #75c6ec)",
        color: "white",
        boxShadow: "dark-lg",
      }}
    >
      Create Account
    </Button>
  );
};

export default ButtonBtn;
