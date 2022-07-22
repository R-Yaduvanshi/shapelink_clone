import { Box, Text, Image } from "@chakra-ui/react";
import React from "react";
import style from "../css/style.module.css";
import { AiOutlineLine } from "react-icons/ai";

const MobileImg = () => {
  return (
    <>
      <Box className={style.startpage_block}>
        <Box className={style.content}>
          <Text
            fontSize="25px"
            fontWeight="700"
            fontFamily="'Lato-bold', sans-serif"
          >
            <span>What Is Twiik?</span>
            {/* <AiOutlineLine className={style.line} /> */}
            <Image
              mt="15px"
              src="https://kcdn.twiikapp.com/images/pt/startpage_h1_bg.jpg"
            />
          </Text>
          <Text size="sm" fontWeight="300">
            Twiik App is a digital fitness log and coach that's always with you.
            As a member you can log your workouts, track results, follow
            programs, boost and challenge friends and join social groups for
            motivation.
          </Text>
        </Box>
        <Box>
          <Image
            src="https://kcdn.twiikapp.com/images/startpage_twiik_app.png"
            className={style.image}
          />
        </Box>
      </Box>
    </>
  );
};

export default MobileImg;
