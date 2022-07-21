import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";
import headstyle from "../css/style.module.css";

const Header = () => {
  return (
    <>
      <Box
        className={headstyle.mainhead}
        backgroundSize="cover"
        backgroundAttachment="fixed"
        p="75px 0px 50px"
        zIndex="-1"
      >
        <Box
          display="table"
          w="100%"
          maxW="1200px"
          m="0px auto"
          p="50px 0px"
          pos="relative"
          boxSizing="border-box"
          zIndex="100"
          overflow="hidden"
          fontSize="16px"
        >
          <Box
            display="table-cell"
            m="0px auto"
            p="0px 50px"
            verticalAlign="middle"
            w="50%"
            boxSizing="border-box"
            color="#fff"
          >
            <Text className={headstyle.h1font} fontSize="36px">
              The personal coach in your pocket. <br /> When, where and how you
              want.
            </Text>
            <Text>
              As a member you can log your workouts in your workout log directly
              in the app. Follow your results, get individual results, personal
              coaching and statistics.
            </Text>
            <Button
              //   className={navstyle.btn2}
              bgGradient="linear(to-r, #5a3bdb, #75c6ec)"
              borderRadius="25px"
              color="white"
              _hover={{
                bgGradient: "linear(to-r, #5a3bdb, #75c6ec)",
                color: "white",
                boxShadow: "dark-lg",
              }}
              p="0px 25px"
              lineHeight="50px"
              box-shadow="0px 0px 10px rgb(0 0 0 / 10%)"
              maxW="200px"
              minW="auto"
              mt="50px"
            >
              Create Account
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Header;
