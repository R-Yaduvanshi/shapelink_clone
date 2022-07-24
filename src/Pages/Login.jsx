import React, { useContext } from "react";
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
  FormErrorMessage,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaFacebookSquare } from "react-icons/fa";
import style from "../css/style.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import FormText from "../CommonForAll/FormText";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = ({ onChange }) => {
  const [isOpen, setOpen] = useState(false);
  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={Yup.object({
        username: Yup.string()
          .required("Email or Username required")
          .min(6, "Username is to sort")
          .max(18, "Username is to long"),
        password: Yup.string()
          .required("Password required")
          .min(8, "Length is to sort"),
      })}
      onSubmit={(values, action) => {
        // alert(JSON.stringify(values, null, 2));
        console.log(action);
        fetch("https://reqres.in/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        })
          .then((res) => res.json())
          .then((res) => {
            auth.handleLogin(res.token);

            if (res.token) {
              alert("Logged in");
              console.log("sahi ja raha hai");
            } else {
              console.log("galat ho rah ahai");
            }

            setOpen(false);
          })
          .catch((error) => {
            alert("Login Failed try again");
            console.log("Server Error");
            setOpen(false);
          });
        action.resetForm();
      }}
    >
      {(formik) => (
        <>
          <Button variant="link" colorScheme="white" onClick={onOpen}>
            {auth.state.isAuth ? `Token ${auth.state.token}` : "Login"}
          </Button>
          <Modal isOpen={isOpen} onClose={onClose} blockScrollOnMount={false}>
            <ModalOverlay />

            <ModalContent
              rounded="none"
              className={style.modalhead}
              marginTop="6.5rem"
            >
              <Container maxW="82%">
                <VStack
                  spacing={4}
                  align="flex-start"
                  w="full"
                  as="form"
                  onSubmit={formik.handleSubmit}
                >
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
                  {/* Input Field */}
                  <FormText name="username" placeholder="username_or_email" />
                  <FormText
                    name="password"
                    placeholder="password"
                    type="password"
                  />

                  <VStack align={["flex - start", "center"]} w="full">
                    <Checkbox size="sm">
                      Log in automatically next time
                    </Checkbox>
                  </VStack>
                  <Button
                    type="submit"
                    w="full"
                    backgroundColor="#3cc6dc"
                    _hover={{
                      backgroundColor: "#2f9bac",
                    }}
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
                  <HStack
                    w="100%"
                    justifyContent="center"
                    paddingBottom="2.5rem"
                  >
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
      )}
    </Formik>
  );
};

export default Login;
