import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import style from "../css/style.module.css";
const Workout = () => {
  return (
    <>
      <Box
        className={style.startpage_block}
        backgroundColor="#f7f7fb"
        mb="300px"
        p="0px"
      >
        <Box className={style.content}>
          <Text
            fontSize="25px"
            fontWeight="700"
            fontFamily="'Lato-bold', sans-serif"
          >
            <span>WORKOUTS PROGRAMS & COACHING</span>
            {/* <AiOutlineLine className={style.line} /> */}
            <Image
              mt="15px"
              src="https://kcdn.twiikapp.com/images/pt/startpage_h1_bg.jpg"
            />
          </Text>
          <Text size="sm" fontWeight="300">
            With The Twiik app you can easily find lots of workout programs to
            follow. Find the program that suits your needs..
          </Text>
        </Box>
        <Box>
          <Image
            src="https://kcdn.twiikapp.com/images/startpage_coach.png"
            className={style.image2}
          />
        </Box>
      </Box>
    </>
  );
};

export default Workout;
