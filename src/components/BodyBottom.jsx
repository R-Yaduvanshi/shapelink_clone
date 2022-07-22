import React from "react";
import style from "../css/style.module.css";
import {
  Box,
  Grid,
  Text,
  Image,
  Container,
  GridItem,
  Button,
} from "@chakra-ui/react";

const BodyBottom = () => {
  return (
    <>
      <Box mt="120px">
        <Container maxW="90%">
          <Text
            fontSize="25px"
            fontWeight="700"
            fontFamily="'Lato-bold', sans-serif"
          >
            THIS IS INCLUDED IN TWIIK
          </Text>
          <Image
            mt="15px"
            src="https://kcdn.twiikapp.com/images/pt/startpage_h1_bg.jpg"
          />
        </Container>
        <Container maxW="90%" mt="40px" marginBottom="145px">
          <Grid gridTemplateColumns="repeat(3,1fr)" gap="20px">
            <GridItem display="flex" gap="25px">
              <Box>
                <Button
                  borderRadius="50%"
                  bgGradient="linear(to-r, #5a3bdb, #75c6ec)"
                  h="60px"
                  w="60px"
                  _hover={{
                    bgGradient: "linear(to-r, #5a3bdb, #75c6ec)",
                  }}
                >
                  <Image src="https://kcdn.twiikapp.com/images/pt/icons/dumbell.png" />
                </Button>
              </Box>
              <Box>
                <Text fontSize="16px" fontWeight="700" color="#000000">
                  PROGRAM, BOOT CAMPS AND WORKOUTS
                </Text>
                <Text fontSize="14px" fontWeight="400" color="#000000">
                  By single workouts, programs and plans or Boot Camps together
                  with other people. Individual setups or shared plans for
                  groups.
                </Text>
              </Box>
            </GridItem>
            <GridItem display="flex" gap="25px">
              <Box>
                <Button
                  borderRadius="50%"
                  bgGradient="linear(to-r, #5a3bdb, #75c6ec)"
                  h="60px"
                  w="60px"
                  _hover={{
                    bgGradient: "linear(to-r, #5a3bdb, #75c6ec)",
                  }}
                >
                  <Image src="https://kcdn.twiikapp.com/images/pt/icons/youtube.png" />
                </Button>
              </Box>
              <Box>
                <Text fontSize="16px" fontWeight="700" color="#000000">
                  EXERCISES & DETAILED WORKOUTS
                </Text>
                <Text fontSize="14px" fontWeight="400" color="#000000">
                  Workouts with exercises with videos, set, time and reps. Log
                  and follow in detail
                </Text>
              </Box>
            </GridItem>
            <GridItem display="flex" gap="25px">
              <Box>
                <Button
                  borderRadius="50%"
                  bgGradient="linear(to-r, #5a3bdb, #75c6ec)"
                  h="60px"
                  w="60px"
                  _hover={{
                    bgGradient: "linear(to-r, #5a3bdb, #75c6ec)",
                  }}
                >
                  <Image src="https://kcdn.twiikapp.com/images/pt/icons/growth.png" />
                </Button>
              </Box>
              <Box>
                <Text fontSize="16px" fontWeight="700" color="#000000">
                  WORKOUT LOG & STATISTICS
                </Text>
                <Text fontSize="14px" fontWeight="400" color="#000000">
                  Get insights of your workout habits and progress with our
                  detailed workout log and statistics.
                </Text>
              </Box>
            </GridItem>
            <GridItem display="flex" gap="25px">
              <Box>
                <Button
                  borderRadius="50%"
                  bgGradient="linear(to-r, #5a3bdb, #75c6ec)"
                  h="60px"
                  w="60px"
                  _hover={{
                    bgGradient: "linear(to-r, #5a3bdb, #75c6ec)",
                  }}
                >
                  <Image src="https://kcdn.twiikapp.com/images/pt/icons/import.png" />
                </Button>
              </Box>
              <Box>
                <Text fontSize="16px" fontWeight="700" color="#000000">
                  IMPORT WORKOUTS
                </Text>
                <Text fontSize="14px" fontWeight="400" color="#000000">
                  You can log all your workouts and import data from services
                  like FitBit, Garmin, Polar, Apple Health, Google Fit, Suunto
                  and more.
                </Text>
              </Box>
            </GridItem>
            <GridItem display="flex" gap="25px">
              <Box>
                <Button
                  borderRadius="50%"
                  bgGradient="linear(to-r, #5a3bdb, #75c6ec)"
                  h="60px"
                  w="60px"
                  _hover={{
                    bgGradient: "linear(to-r, #5a3bdb, #75c6ec)",
                  }}
                >
                  <Image src="https://kcdn.twiikapp.com/images/pt/icons/whatsapp.png" />
                </Button>
              </Box>
              <Box>
                <Text fontSize="16px" fontWeight="700" color="#000000">
                  CHAT & HANG OUT
                </Text>
                <Text fontSize="14px" fontWeight="400" color="#000000">
                  Chat with your coach directly in the app. Join social groups
                  where you can find other members with the same interests.
                </Text>
              </Box>
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default BodyBottom;
