import React from "react";
import { Box, VStack, HStack, Text, Button, Image } from "@chakra-ui/react";
import ButtonBtn from "../CommonForAll/ButtonBtn";

const GetTheApp = () => {
  return (
    <>
      <Box>
        <VStack
          w="full"
          h="350px"
          justifyContent="center"
          backgroundColor="#383838"
        ></VStack>
        <HStack
          zIndex="100"
          w="full"
          maxW="1250px"
          paddingLeft="6rem"
          paddingBottom="5rem"
        >
          <Box>
            <Image
              mt="-200px"
              maxW="325px"
              zIndex="2"
              src="https://kcdn.twiikapp.com/images/gettheapp.png"
            />
          </Box>
          <VStack
            align="left"
            paddingLeft="15rem"
            gap="4"
            // h="400px"
            justifyContent="center"
          >
            <Box>
              <Text
                fontSize="25px"
                fontWeight="700"
                fontFamily="'Lato-bold', sans-serif"
              >
                <span>DOWNLOAD TWIIK TODAY</span>
                {/* <AiOutlineLine className={style.line} /> */}
                <Image
                  mt="15px"
                  src="https://kcdn.twiikapp.com/images/pt/startpage_h1_bg.jpg"
                />
              </Text>
            </Box>
            <Box>
              <Text
                fontSize="16px"
                fontWeight="400"
                fontFamily="'Lato-bold', sans-serif"
                w="50%"
              >
                As a member you will be able to log all your workouts, track
                results, follow programs and challenge friends and join groups
              </Text>
            </Box>
            <HStack h="115px">
              <a
                target="_blank"
                href="https://apps.apple.com/se/app/twiik/id1022318229?ls=1"
              >
                <Image
                  w="150"
                  h="50"
                  src="https://kcdn.twiikapp.com/images/language/en/appstore_button.png"
                />
              </a>
              <a
                target="_blank"
                href="https://play.google.com/store/apps/details?id=me.twiik.twiikapp"
              >
                <Image
                  w="168"
                  h="50"
                  src="https://kcdn.twiikapp.com/images/language/en/googleplay_button.png"
                />
              </a>
            </HStack>
          </VStack>
        </HStack>
      </Box>
    </>
  );
};

export default GetTheApp;
