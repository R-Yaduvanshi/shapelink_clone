import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import style from "../css/style.module.css";

const Challange = () => {
  return (
    <>
      <Box
        className={style.startpage_block}
        // backgroundColor="#f7f7fb"
        // mb="px"
        // // mt="900px"
        // p="0px"
      >
        <Box>
          <Image
            src="https://kcdn.twiikapp.com/images/startpage_stream.jpg"
            className={style.image2}
          />
        </Box>
        <Box className={style.content}>
          <Text fontSize="6xl" fontWeight="600" className={style.h2}>
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
