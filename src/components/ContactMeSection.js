import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
  Container,
  Text,
  Flex,
  useColorModeValue,
  Icon,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faUser, 
  faEnvelope, 
  faCommentDots 
} from "@fortawesome/free-solid-svg-icons";

const ContactMeSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  useEffect(() => {
    if (response) {
      onOpen(response.type, response.message);
      if (response.type === "success") {
        formik.resetForm();
      }
    }
  }, [response]);

  const initialValues = {
    firstName: "",
    email: "",
    type: "hireMe",
    comment: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    type: Yup.string().optional(),
    comment: Yup.string()
      .required("Required")
      .min(25, "Must be at least 25 characters"),
  });

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      submit("https://api.example.com", values);
    },
    validationSchema: validationSchema,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    formik.handleSubmit(e);
  };
  
  const inputStyles = {
    bg: "rgba(255, 255, 255, 0.08)",
    border: "1px solid",
    borderColor: "rgba(255, 255, 255, 0.16)",
    _hover: {
      borderColor: "blue.300",
    },
    _focus: {
      borderColor: "blue.300",
      boxShadow: "0 0 0 1px #63B3ED",
    },
    color: "white",
    _placeholder: { color: "gray.400" },
  };

  return (
    <FullScreenSection
      isDarkBackground
      backgroundImage="linear-gradient(135deg, #1A365D 0%, #2D3748 100%)"
      py={16}
      spacing={8}
    >
      <Container maxWidth="800px" px={{ base: 4, md: 8 }}>
        <VStack spacing={10} align="stretch">
          <Box textAlign="center">
            <Text
              color="blue.300"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="sm"
              textTransform="uppercase"
              mb={2}
            >
              Get in Touch
            </Text>
            <Heading 
              as="h1" 
              id="contactme-section" 
              fontSize={{ base: "3xl", md: "4xl" }}
              fontWeight="bold"
              bgGradient="linear(to-r, blue.100, purple.100)"
              bgClip="text"
              mb={4}
            >
              Contact Me
            </Heading>
            <Text 
              color="gray.400" 
              maxWidth="550px" 
              mx="auto"
              fontSize={{ base: "md", md: "lg" }}
            >
              Have a question or want to work together? Drop me a message!
            </Text>
          </Box>

          <Box 
            p={{ base: 6, md: 8 }} 
            borderRadius="xl" 
            bg="rgba(0, 0, 0, 0.2)"
            backdropFilter="blur(10px)"
            border="1px solid rgba(255, 255, 255, 0.1)"
            boxShadow="lg"
          >
            <form onSubmit={handleSubmit}>
              <VStack spacing={6}>
                <Flex 
                  direction={{ base: "column", md: "row" }} 
                  width="100%" 
                  gap={6}
                >
                  <FormControl
                    isInvalid={formik.errors.firstName && formik.touched.firstName}
                    flex="1"
                  >
                    <FormLabel 
                      htmlFor="firstName" 
                      color="gray.300"
                      fontWeight="medium"
                      fontSize="sm"
                    >
                      Name
                    </FormLabel>
                    <InputGroup>
                      <InputLeftElement pointerEvents="none">
                        <Icon as={FontAwesomeIcon} icon={faUser} color="gray.500" />
                      </InputLeftElement>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="Your name"
                        {...formik.getFieldProps("firstName")}
                        {...inputStyles}
                        pl={10}
                      />
                    </InputGroup>
                    <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                  </FormControl>
                  
                  <FormControl
                    isInvalid={formik.errors.email && formik.touched.email}
                    flex="1"
                  >
                    <FormLabel 
                      htmlFor="email" 
                      color="gray.300"
                      fontWeight="medium"
                      fontSize="sm"
                    >
                      Email Address
                    </FormLabel>
                    <InputGroup>
                      <InputLeftElement pointerEvents="none">
                        <Icon as={FontAwesomeIcon} icon={faEnvelope} color="gray.500" />
                      </InputLeftElement>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        {...formik.getFieldProps("email")}
                        {...inputStyles}
                        pl={10}
                      />
                    </InputGroup>
                    <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                  </FormControl>
                </Flex>
                
                <FormControl>
                  <FormLabel 
                    htmlFor="type" 
                    color="gray.300"
                    fontWeight="medium"
                    fontSize="sm"
                  >
                    Type of enquiry
                  </FormLabel>
                  <Select 
                    id="type" 
                    name="type"
                    {...formik.getFieldProps("type")}
                    {...inputStyles}
                  >
                    <option value="hireMe" style={{ backgroundColor: "#2D3748" }}>
                      Freelance project proposal
                    </option>
                    <option value="openSource" style={{ backgroundColor: "#2D3748" }}>
                      Job opportunity
                    </option>
                    <option value="other" style={{ backgroundColor: "#2D3748" }}>
                      Other
                    </option>
                  </Select>
                </FormControl>
                
                <FormControl
                  isInvalid={formik.errors.comment && formik.touched.comment}
                >
                  <FormLabel 
                    htmlFor="comment" 
                    color="gray.300"
                    fontWeight="medium"
                    fontSize="sm"
                  >
                    Your message
                  </FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none" height="full" alignItems="flex-start" pt={2} pl={2}>
                      <Icon as={FontAwesomeIcon} icon={faCommentDots} color="gray.500" />
                    </InputLeftElement>
                    <Textarea
                      id="comment"
                      name="comment"
                      placeholder="Tell me about your project, questions, or job opportunity..."
                      height="150px"
                      {...formik.getFieldProps("comment")}
                      {...inputStyles}
                      pl={10}
                    />
                  </InputGroup>
                  <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
                </FormControl>
                
                <Button 
                  type="submit" 
                  isLoading={isLoading}
                  width="full"
                  py={6}
                  borderRadius="md"
                  bgGradient="linear(to-r, blue.400, purple.500)"
                  color="white"
                  fontWeight="semibold"
                  _hover={{
                    bgGradient: "linear(to-r, blue.500, purple.600)",
                    transform: "translateY(-2px)",
                    boxShadow: "0 10px 20px -10px rgba(66, 153, 225, 0.5)",
                  }}
                  _active={{
                    transform: "translateY(0)",
                    boxShadow: "none",
                  }}
                  transition="all 0.3s ease"
                >
                  Send Message
                </Button>
              </VStack>
            </form>
          </Box>
        </VStack>
      </Container>
    </FullScreenSection>
  );
};

export default ContactMeSection;
