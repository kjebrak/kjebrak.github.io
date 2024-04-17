import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import avatar_img from "../images/avatar_light_tropical.jpg";

const greeting = "Hello, I am Kjetil from Norway!";
const bio1 = "A full stack developer and chemical engineer,";
const bio2 = "I love to build things and solve problems";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <Avatar name="Avatar" src={avatar_img} size='2xl' />
    <VStack>
      <Heading as="h3" size="md" color="white" textAlign="center" mb={8} mt={2}>
        {greeting}
      </Heading>
      <Heading as="h1" size="lg" color="white" textAlign="center" mb={2}>
        {bio1}
      </Heading>
      <Heading as="h1" size="lg" color="white" textAlign="center">
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
