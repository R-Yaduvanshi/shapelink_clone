import React, { useState } from "react";
import { Box, Button, Flex, Spacer, Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import navstyle from "../css/style.module.css";
import Login from "../Pages/Login";
import "../App.css";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeNavbarBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  return (
    <>
      <Flex className="navbar active" gap="8">
        <Box w="30%" boxSizing="border-box">
          <NavLink to="/">
            <Image src="https://kcdn.twiikapp.com/images/logo.png" h="40px" />
          </NavLink>
        </Box>
        <Spacer />
        <NavLink to="get-the-app">
          <Button variant="link" colorScheme="white">
            Get The App
          </Button>
        </NavLink>
        <NavLink to="/contact">
          <Button variant="link" colorScheme="white">
            Contact
          </Button>
        </NavLink>
        {/* Login Modal */}
        <Login />
        <NavLink to="/signup">
          <Button
            className={navstyle.btn2}
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
        </NavLink>
      </Flex>
    </>
  );
};

export default Navbar;
