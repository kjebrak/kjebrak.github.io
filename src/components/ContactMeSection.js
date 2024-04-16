import React, { useEffect } from "react";
import { useFormik, validateYupSchema } from "formik";
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
} from "@chakra-ui/react";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const LandingSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  useEffect(() => {
    if (response) {
      console.log(response);
      onOpen(response.type, response.message);
      if (response.type === "success") {
        console.log("resetting form");
        formik.resetForm();
      }
    }
  }, [response]);

  const initialValues = {
    firstName: "",
    email: "",
    type: "",
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
      console.log(values);
      submit("https://api.example.com", values);
    },
    validationSchema: validationSchema,
    // enableReinitialize: true,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    formik.handleSubmit(e);
    console.log(formik.submitCount);
    console.log(formik.isValidating);
    console.log(formik.errors);
    console.log(formik);
    // formik.resetForm();
  };

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={(e) => handleSubmit(e)}>
            <VStack spacing={4}>
              <FormControl
                isInvalid={formik.errors.firstName && formik.touched.firstName}
              >
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  {...formik.getFieldProps("firstName")}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={formik.errors.email && formik.touched.email}
              >
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps("email")}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type" name="type">
                  <option
                    value="hireMe"
                    style={{ "background-color": "purple" }}
                  >
                    Freelance project proposal
                  </option>
                  <option
                    value="openSource "
                    style={{ "background-color": "purple" }}
                  >
                    Job opportunity
                  </option>
                  <option
                    value="other"
                    style={{ "background-color": "purple" }}
                  >
                    Other
                  </option>
                </Select>
              </FormControl>
              <FormControl
                isInvalid={formik.errors.comment && formik.touched.comment}
              >
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  {...formik.getFieldProps("comment")}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <Button type="submit" colorScheme="purple" width="full" isLoading={isLoading}>
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
