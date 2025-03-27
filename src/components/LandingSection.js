import React from "react";
import { Avatar, Heading, VStack, keyframes, Box} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
// import avatar_img from "../images/avatar_light_tropical.jpg";
import avatar_img from "../images/avatar-sitting-urban.jpeg";
import { formatWithCursor } from "prettier";

const greeting = "Hello, I am Kjetil from Norway!";
const bio1 = "Full-stack developer and chemical engineer";
const bio2 = "I hate problems and love solving them!";

const fluidAvatar = keyframes`
0% {
  border-radius:  30% 70% 70% 30% / 30% 30% 70% 70%;
  box-shadow: 15px 15px 50px #18181b
}
25% {
  border-radius:  58% 42% 75% 25% / 76% 46% 54% 24%;
}
50% {
  border-radius:  50% 50% 33% 67% / 55% 27% 73% 45%
}
75% {
  border-radius:  33% 67% 58% 42% / 63% 68% 32% 37%
  box-shadow: -10px -5px 50px #18181b
}`;

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => {
  return (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
    pt={12}
  >
    <Box
      width="380px"
      height="380px"
      borderRadius="30% 70% 70% 30% / 30% 30% 70% 70%"
      boxShadow="15px 15px 50px #18181b"
      animation={`${fluidAvatar} 6s linear infinite`}
      transition="all 1s ease-in-out"
      backgroundImage={`url(${avatar_img})`}
      backgroundSize="cover"
      backgroundPosition="center"
      overflow="hidden"
      _hover={{
        animationPlayState: "paused",
        border: "10px solid white"
      }}
    />
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
};

export default LandingSection;
