import React from "react";
import { Avatar, Heading, VStack, keyframes} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import avatar_img from "../images/avatar_light_tropical.jpg";
import { formatWithCursor } from "prettier";

const greeting = "Hello, I am Kjetil from Norway!";
const bio1 = "A full stack developer and chemical engineer,";
const bio2 = "I hate problems and love solving them!";

const fluidAvatar = keyframes`
0% {
  border-radius:  60% 40% 30% 70% / 60% 30% 70% 40%;
}
50% {
  border-radius:  30% 60% 70% 40% / 50% 60% 30% 60%;
}
100% {
  border-radius:  60% 40% 30% 70% / 60% 30% 70% 40%
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
    <Avatar 
    name="Avatar" 
    src={avatar_img} 
    size='3xl'
    borderRadius={"60% 40% 30% 70% / 60% 30% 70% 40%"}
    // animation={`${fluidAvatar} 4s ease-in-out 0s infinite normal ;`}
    animation={`${fluidAvatar} 8s linear infinite;`}
    transition={`all 1s ease-in-out;`}
    // border="2px solid white" // for debugging
    background={`url(${avatar_img})`}
    _hover={{"animation-play-state": "paused", "border": "10px solid white"}}
    overflow={"hidden"}
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
;}

export default LandingSection;
