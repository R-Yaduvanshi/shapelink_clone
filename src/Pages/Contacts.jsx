import {
  Button,
  HStack,
  VStack,
  Box,
  Text,
  Image,
  Input,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import ButtonBtn from "../CommonForAll/ButtonBtn";
import "../css/myscss.scss";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";

const Contacts = () => {
  const [isVerified, setIsVerified] = useState(false);
  const handleCaptcha = (value) => {
    console.log("Captcha value:", value);
    setIsVerified(true);
  };
  return (
    <>
      <Box>
        <VStack
          w="full"
          h="350px"
          justifyContent="center"
          backgroundColor="#383838"
        >
          <HStack>
            <Text
              color="white"
              fontSize="26px"
              fontWeight="400"
              fontFamily="lato,Arial,sans-serif"
            >
              Are you not a member?
            </Text>
          </HStack>
          <HStack width="100%" h="100px" justifyContent="center" gap="2">
            <ButtonBtn />
            <Button
              border="2px"
              borderColor="#75c6ec"
              backgroundColor="#383838"
              color="white"
              borderRadius="20px"
              padding="1rem"
              _hover={{
                backgroundColor: "#383838",
              }}
              w="140px"
            >
              Get The App
            </Button>
          </HStack>
        </VStack>
        <VStack
          align="left"
          paddingLeft="4rem"
          gap="4"
          paddingTop="90px"
          paddingBottom="150px"
        >
          <Box>
            <Text
              fontSize="25px"
              fontWeight="700"
              fontFamily="'Lato-bold', sans-serif"
            >
              <span>CONTACT TWIIK</span>
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
              mt="2rem"
            >
              If you want to contact us, please use the form below or send an
              e-mail to appsupport@twiik.me
            </Text>
          </Box>
          <Box w="55%">
            <Input
              placeholder="Name"
              variant="unstyled"
              borderBottom="1px"
              borderColor="black"
              borderRadius="none"
              paddingBottom="1rem"
            />
          </Box>
          <Box w="55%">
            <Input
              placeholder="Email Address"
              variant="unstyled"
              borderBottom="1px"
              borderColor="black"
              borderRadius="none"
              paddingBottom="1rem"
            />
          </Box>
          <Box w="55%">
            <Textarea
              placeholder="Message"
              variant="unstyled"
              borderBottom="1px"
              borderColor="black"
              borderRadius="none"
              paddingBottom="1rem"
            />
          </Box>
          <Box>
            <ReCAPTCHA
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
              onChange={handleCaptcha}
            />
          </Box>
          <Box>
            {isVerified ? (
              <Button
                // className={btnstyle.btn2}
                bgGradient="linear(to-r, #5a3bdb, #75c6ec)"
                borderRadius="25px"
                color="white"
                _hover={{
                  bgGradient: "linear(to-r, #5a3bdb, #75c6ec)",
                  color: "white",
                  boxShadow: "dark-lg",
                }}
                w="95px"
                h="50px"
              >
                Send
              </Button>
            ) : (
              <Button
                // className={btnstyle.btn2}
                disabled={true}
                bgGradient="linear(to-r, #5a3bdb, #75c6ec)"
                borderRadius="25px"
                color="white"
                _hover={{
                  bgGradient: "linear(to-r, #5a3bdb, #75c6ec)",
                  color: "white",
                  boxShadow: "dark-lg",
                }}
                w="95px"
                h="50px"
              >
                Send
              </Button>
            )}
          </Box>
        </VStack>
      </Box>
    </>
  );
};

export default Contacts;
