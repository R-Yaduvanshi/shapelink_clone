import React from "react";
import {
  Modal,
  Button,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  Container,
  Checkbox,
  VStack,
  Heading,
  HStack,
  Text,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaFacebookSquare } from "react-icons/fa";
import style from "../css/style.module.css";

const Login = ({ onChange }) => {
  const [isOpen, setOpen] = useState(false);
  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const handleLogin = () => {
    console.log("Hello it work");
  };
  return (
    <>
      <Button variant="link" colorScheme="white" onClick={onOpen}>
        Login
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} blockScrollOnMount={false}>
        <ModalOverlay />

        <ModalContent
          rounded="none"
          className={style.modalhead}
          border="1px"
          borderColor="red"
          marginTop="6.5rem"
        >
          <Container maxW="82%">
            <VStack spacing={4} align="flex-start" w="full">
              <VStack align={["flex - start", "center"]} w="full">
                <Heading
                  fontSize="28px"
                  lineHeight="42px"
                  fontWeight="400"
                  fontFamily="lato"
                  mt="2rem"
                >
                  Login
                </Heading>
              </VStack>
              <FormControl>
                <Input
                  placeholder="username_or_email"
                  onChange={onChange}
                  borderRadius="0px"
                  variant="flushed"
                  focusBorderColor="none"
                  autoComplete="off"
                  _placeholder={{
                    color: "#000000",
                    fontWeight: "400",
                    fontFamily: "lato,Arial,sans-serif",
                    fontSize: "13px",
                  }}
                />
              </FormControl>
              <FormControl>
                <Input
                  placeholder="password"
                  borderRadius="0px"
                  variant="flushed"
                  focusBorderColor="none"
                  _placeholder={{
                    color: "#000000",
                    fontWeight: "400",
                    fontFamily: "lato,Arial,sans-serif",
                    fontSize: "13px",
                  }}
                  // borderBottom="black"
                />
              </FormControl>
              <VStack align={["flex - start", "center"]} w="full">
                <Checkbox size="sm">Log in automatically next time</Checkbox>
              </VStack>
              <Button
                w="full"
                backgroundColor="#3cc6dc"
                _hover={{
                  backgroundColor: "#2f9bac",
                }}
                onClick={handleLogin}
              >
                Login
              </Button>
              <VStack align={["flex - start", "center"]} w="full">
                <Text>or</Text>
              </VStack>
              <Button
                colorScheme="facebook"
                w="full"
                _hover={{
                  backgroundColor: "#293d69",
                }}
              >
                <Box w="10%">
                  <FaFacebookSquare size="sm" />
                </Box>
                <Box w="90%" textAlign="center">
                  Login With Facebook
                </Box>
              </Button>
              <HStack w="100%" justifyContent="center" paddingBottom="2.5rem">
                <Button size="xs" variant="link" color="#3cc6dc">
                  Forgotten the Password?
                </Button>
                <Text> . </Text>
                <Button size="xs" variant="link" color="#3cc6dc">
                  Create Account
                </Button>
              </HStack>
            </VStack>
          </Container>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Login;
// leftIcon={<FaFacebook />}
{
  /* <ModalHeader
textAlign="center"
fontSize="28px"
lineHeight="42px"
fontWeight="400"
fontFamily="lato"
>
LOGIN
</ModalHeader>
{/* <ModalCloseButton /> */
}
{
  /* <ModalBody pb={6}> */
}
{
  /* <FormControl> */
}

// </FormControl>
{
  /* <FormControl mt={4}> */
}

// </FormControl>
{
  /* <Checkbox>Log in automatically next time</Checkbox>
</ModalBody>
<ModalFooter>
<Button colorScheme="blue" mr={3}>
  Save
</Button>
</ModalFooter> */
}
