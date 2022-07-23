import {
  Button,
  Container,
  Flex,
  HStack,
  Box,
  Text,
  Image,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import style from "../css/style.module.css";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigateContact = () => {
    navigate("/contact");
  };

  const handleNavigateTerms = () => {
    navigate("/terms&condition");
  };

  return (
    <>
      <Flex w="100%" h="250px" backgroundColor="#121451">
        <Container maxW="85%">
          <HStack justifyContent="space-between">
            <Box
              w="30%"
              textAlign="left"
              h="250px"
              display="flex"
              flexDirection="column"
              //   alignItems="center"
              justifyContent="center"
              gap="3"
            >
              <Image
                src="https://kcdn.twiikapp.com/images/logo.png"
                w="165px"
                h="50px"
              />
              <Text color="#bbbbbb" fontSize="12" fontWeight="400">
                All rights reserved © 2002 - 2022
              </Text>
              <Text color="#bbbbbb" fontSize="12" fontWeight="400">
                Developed by Wellnesstech Labs International AB
              </Text>
              <Text color="white">
                <span>
                  <Button
                    variant="link"
                    onClick={handleNavigateContact}
                    fontSize="12"
                    fontWeight="400"
                    color="#ffffff"
                  >
                    Contact Us
                  </Button>
                </span>
                <span> . </span>
                <span>
                  <Button
                    variant="link"
                    onClick={handleNavigateTerms}
                    fontSize="12"
                    fontWeight="400"
                    color="#ffffff"
                  >
                    Terms & Conidition
                  </Button>
                </span>
              </Text>
            </Box>
            <HStack h="250px" gap="5">
              {/* Facebook */}
              <a target="_blank" href="https://www.facebook.com/twiikme/">
                <Image
                  src="https://kcdn.twiikapp.com/images/icon_facebook.png"
                  w="50"
                  h="50"
                  className={style.SocialLink}
                />
              </a>

              {/* Instagram */}

              <a target="_blank" href="https://www.instagram.com/twiik.me/">
                <Image
                  src="https://kcdn.twiikapp.com/images/icon_instagram.png"
                  w="50"
                  h="50"

                  // onClick={gotoFaceBook}
                />
              </a>

              {/* Linkedin */}

              <a target="_blank" href="https://www.linkedin.com/company/twiik/">
                <Image
                  src="https://kcdn.twiikapp.com/images/icon_linkedin.png"
                  w="50"
                  h="50"
                  // onClick={gotoFaceBook}
                />
              </a>

              {/* Apple Store */}

              <a
                target="_blank"
                href="https://apps.apple.com/se/app/twiik/id1022318229?ls=1"
              >
                <Image
                  src="https://kcdn.twiikapp.com/images/icon_apple.png"
                  w="50"
                  h="50"
                  // onClick={gotoFaceBook}
                />
              </a>

              {/* Android Store */}

              <a
                target="_blank"
                href="https://play.google.com/store/apps/details?id=me.twiik.twiikapp"
              >
                <Image
                  src="https://kcdn.twiikapp.com/images/icon_android.png"
                  w="50"
                  h="50"
                  // onClick={gotoFaceBook}
                />
              </a>
            </HStack>
          </HStack>
        </Container>
      </Flex>
    </>
  );
};

export default Footer;
