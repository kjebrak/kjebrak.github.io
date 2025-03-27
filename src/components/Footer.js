import React from "react";
import { Box, Flex, Text, HStack, IconButton, Divider } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const socialLinks = [
  {
    icon: faGithub,
    url: "https://github.com/kjebrak/",
    label: "GitHub",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/kjetil-brakstad/",
    label: "LinkedIn",
  },
  {
    icon: faEnvelope,
    url: "mailto:kjoetertech@gmail.com",
    label: "Email",
  },
];

const Footer = () => {
  return (
    <Box 
      backgroundColor="rgba(17, 24, 39, 1)"
      backgroundImage="linear-gradient(to bottom, #111827, #1E293B)"
      borderTop="1px solid rgba(255, 255, 255, 0.1)"
    >
      <footer>
        <Flex
          direction="column"
          margin="0 auto"
          px={{ base: 4, md: 12 }}
          py={8}
          color="gray.300"
          justifyContent="center"
          alignItems="center"
          maxWidth="1280px"
        >
          <HStack spacing={4} mb={6}>
            {socialLinks.map((social, index) => (
              <IconButton
                key={index}
                as="a"
                href={social.url}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
                icon={<FontAwesomeIcon icon={social.icon} />}
                fontSize="lg"
                size="sm"
                colorScheme="whiteAlpha"
                variant="ghost"
                borderRadius="full"
                transition="all 0.3s ease"
                _hover={{
                  transform: "translateY(-3px)",
                  color: "blue.300",
                  bg: "rgba(255,255,255,0.1)",
                }}
              />
            ))}
          </HStack>
          
          <Divider width="100px" borderColor="rgba(255,255,255,0.3)" mb={6} />
          
          <Text
            fontSize="sm"
            fontWeight="medium"
            bgGradient="linear(to-r, blue.200, purple.200)"
            bgClip="text"
          >
            kjebrak • © {new Date().getFullYear()}
          </Text>
          
          <Text fontSize="xs" color="gray.500" mt={2} textAlign="center">
            Designed & built with ❤️
          </Text>
        </Flex>
      </footer>
    </Box>
  );
};

export default Footer;
