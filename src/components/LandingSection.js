import React from "react";
import { Heading, VStack, Box, Text, Flex, keyframes, useColorModeValue } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
// import avatar_img from "../images/avatar_light_tropical.jpg";
import avatar_img from "../images/avatar-sitting-urban.jpeg";

const greeting = "Hello, I am Kjetil from Norway!";
const bio1 = "Full-stack developer and chemical engineer";
const bio2 = "I hate problems and love solving them!";

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

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
      backgroundColor="#111827"
      backgroundImage="linear-gradient(135deg, #111827 0%, #1E3A8A 100%)"
      pt={12}
    >
      <Flex 
        direction={{ base: "column", md: "row" }} 
        align="center" 
        justify="center"
        maxWidth="1200px"
        wrap="wrap"
        px={8}
        gap={{ base: 8, md: 16 }}
      >
        <Box
          width={{ base: "280px", md: "380px" }}
          height={{ base: "280px", md: "380px" }}
          borderRadius="30% 70% 70% 30% / 30% 30% 70% 70%"
          boxShadow="0 25px 50px -12px rgba(0, 0, 0, 0.6)"
          animation={`${fluidAvatar} 8s ease-in-out infinite, ${float} 6s ease-in-out infinite`}
          transition="all 0.3s ease-in-out"
          backgroundImage={`url(${avatar_img})`}
          backgroundSize="cover"
          backgroundPosition="center"
          overflow="hidden"
          _hover={{
            animationPlayState: "paused",
            border: "10px solid white"
          }}
        />
        
        <VStack 
          spacing={6} 
          align={{ base: "center", md: "flex-start" }}
          maxWidth={{ base: "100%", md: "500px" }}
        >
          <Box 
            bg="rgba(255,255,255,0.1)" 
            px={4} 
            py={2} 
            borderRadius="full"
            backdropFilter="blur(10px)"
          >
            <Text fontSize="lg" fontWeight="medium" color="blue.100">
              {greeting}
            </Text>
          </Box>
          
          <VStack spacing={3} align={{ base: "center", md: "flex-start" }}>
            <Heading 
              as="h1" 
              fontSize={{ base: "3xl", md: "5xl" }} 
              fontWeight="bold" 
              color="white" 
              lineHeight="shorter"
              bgGradient="linear(to-r, blue.100, purple.100)"
              bgClip="text"
            >
              {bio1}
            </Heading>
            
            <Heading 
              as="h2" 
              fontSize={{ base: "xl", md: "2xl" }} 
              fontWeight="semibold" 
              color="blue.100" 
              opacity={0.9}
            >
              {bio2}
            </Heading>
          </VStack>
          
          <Box 
            mt={4} 
            p={4} 
            borderRadius="xl" 
            bg="rgba(255,255,255,0.05)"
            backdropFilter="blur(8px)"
            border="1px solid rgba(255,255,255,0.1)"
          >
            <Text fontSize={{ base: "md", md: "lg" }} color="gray.200">
              Transforming complex problems into elegant solutions through code.
              Let's build something amazing together!
            </Text>
          </Box>
        </VStack>
      </Flex>
    </FullScreenSection>
  );
};

export default LandingSection;
