import { Container, Box, Text, Image } from "@chakra-ui/react";
import React from "react";
import style from "../css/style.module.css";
import { TiTick } from "react-icons/ti";
import { Icon } from "@chakra-ui/react";

const MobileImgLeft = () => {
  return (
    <>
      <Box
        display="table"
        maxW="1200px"
        w="100%"
        p="50px 0px"
        m="0px auto"
        position="relative"
        boxSizing="border-box"
        z-index="100"
        overflow="hidden"
        fontSize="16px"
      >
        <Container maxW="90%">
          <Box textAlign="center" display="table-cell">
            <Image src="https://kcdn.twiikapp.com/images/startpage_stats.png" />
          </Box>
          <Box
            display="table-cell"
            m="0px auto"
            p="0px 50px"
            verticalAlign="middle"
            boxSizing="border-box"
            w="53%"
          >
            <Text
              fontSize="25px"
              fontWeight="700"
              fontFamily="'Lato-bold', sans-serif"
            >
              KEEP TRACK OF YOUR HABITS WITH OUR WORKOUT LOG
            </Text>
            <ul>
              <li
                className={style.listg}
                style={{
                  display: "flex",
                  justifyContent: "left",
                  alignItems: "center",
                }}
              >
                <Icon as={TiTick} color="#4b12d8" h={8} w={8} /> Your own
                digital fitness log
              </li>
              <li
                style={{
                  display: "flex",
                  justifyContent: "left",
                  alignItems: "center",
                }}
              >
                <Icon as={TiTick} color="#4b12d8" h={8} w={8} /> Log all types
                of activities
              </li>
              <li
                style={{
                  display: "flex",
                  justifyContent: "left",
                  alignItems: "center",
                }}
              >
                <Icon as={TiTick} h={8} w={8} color="#4b12d8" /> Follow your
                results and keep track of your progress and habits
              </li>
            </ul>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default MobileImgLeft;
