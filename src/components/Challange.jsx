import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import style from "../css/style.module.css";

const Challange = () => {
  return (
    <>
      <Box className={style.startpage_block} mt="-260px">
        <Box>
          <Image
            src="https://kcdn.twiikapp.com/images/startpage_stream.jpg"
            className={style.image2}
          />
        </Box>
        <Box className={style.content}>
          <Text
            fontSize="25px"
            fontWeight="700"
            fontFamily="'Lato-bold', sans-serif"
          >
            <span>CHALLENGE & BOOST</span>
            {/* <AiOutlineLine className={style.line} /> */}
            <Image
              //   mt="250px"
              src="https://kcdn.twiikapp.com/images/pt/startpage_h1_bg.jpg"
            />
          </Text>
          <Text size="sm" fontWeight="300">
            Add and follow your friends. Boost and write comments on each others
            workouts. Why not create a challenge to create that extra bit of
            motivation. Create social groups where you can chat and share info.
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default Challange;
