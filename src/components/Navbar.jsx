import { Button, Flex, Image, Spacer, Box } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import navstyle from "../css/style.module.css";

const Navbar = () => {
  return (
    <>
      <Flex className={navstyle.main_container} gap="8">
        <Box>
          <NavLink to="/">
            <Image src="https://kcdn.twiikapp.com/images/logo.png" h="40px" />
          </NavLink>
        </Box>
        <Spacer />
        <NavLink to="/get-the-app">
          <Button variant="link" colorScheme="white">
            Get The App
          </Button>
        </NavLink>
        <NavLink to="/contact">
          <Button variant="link" colorScheme="white">
            Contact
          </Button>
        </NavLink>
        <NavLink to="/login">
          <Button variant="link" colorScheme="white">
            Login
          </Button>
        </NavLink>
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
            //to right, #5a3bdb, #75c6ec
          >
            Create Account
          </Button>
        </NavLink>
      </Flex>
    </>
  );
};

export default Navbar;
