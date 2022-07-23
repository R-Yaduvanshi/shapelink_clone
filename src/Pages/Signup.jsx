import {
  VStack,
  Text,
  Box,
  HStack,
  Input,
  Button,
  Image,
} from "@chakra-ui/react";
import React from "react";
import "../css/myscss.scss";

const Signup = () => {
  return (
    <>
      <Box
        w="100%"
        backgroundColor="#121451"
        display="flex"
        justifyContent="center"
      >
        <VStack
          w="90%"
          paddingTop="150px"
          paddingBottom="90px"
          h="auto"
          borderBottom="1px"
          borderColor="#ffffff"
        >
          <VStack
            w="80%"
            borderRadius="20px"
            backgroundColor="#2a2c63"
            paddingTop="30px"
            paddingBottom="30px"
          >
            <VStack>
              <Text
                fontSize="36px"
                fontWeight="400"
                color="#ffffff"
                fontFamily="lato, Arial,sans-serif;"
                textAlign="center"
              >
                Do you have a code for TeamBoost?
              </Text>
              <Text
                fontSize="15px"
                fontWeight="400"
                color="#ffffff"
                fontFamily="lato, Arial,sans-serif;"
                w="95%"
                // padding="10px"
                // textAlign="center"
              >
                If you have received a code to join a TeamBoost, then you can
                create your account here on the web, fill in the code below and
                click "Proceed".
              </Text>
              <HStack paddingTop="20px" w="100%" textAlign="center">
                <Box w="100%" display="flex" gap="3" justifyContent="center">
                  <Input
                    placeholder="Enter your code here"
                    w="40%"
                    backgroundColor="#ffffff"
                    className="input"
                  />
                  <Button>Proceed</Button>
                </Box>
              </HStack>
            </VStack>
          </VStack>
          <VStack paddingTop="30px">
            <Text
              fontSize="60px"
              fontWeight="400"
              color="#ffffff"
              fontFamily="lato, Arial, sans-serif;"
            >
              Create an account in the app!
            </Text>
            <Text
              color="#ffffff"
              fontSize="15px"
              fontFamily="lato, Arial, sans-serif;"
            >
              To be able to use Twiik you need to create an account in the app.
            </Text>
          </VStack>
          <VStack paddingTop="60px">
            <Image src="https://kcdn.twiikapp.com/images/twiik_register.png" />
          </VStack>
          <VStack paddingTop="10px">
            <Text color="#ffffff" fontSize="15px" fontWeight="semibold">
              Get the App
            </Text>
          </VStack>
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
          {/* <Container borderBottom="1px" borderColor="#ffffff"></Container> */}
        </VStack>
      </Box>
    </>
  );
};

export default Signup;
