import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { 
  Box, 
  HStack, 
  Flex, 
  IconButton, 
  useDisclosure, 
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  useBreakpointValue,
  useColorModeValue,
  Text,
  Heading,
} from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons';

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: kjoetertech@gmail.com",
    label: "Email",
  },
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
  // {
  //   icon: faMedium,
  //   url: "https://medium.com",
  // },
  // {
  //   icon: faStackOverflow,
  //   url: "https://stackoverflow.com",
  // },
];

const Header = () => {
  const headerRef = useRef(null);
  const prevScrollY = useRef(0);
  const [scrollingDown, setScrollingDown] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });

  const handleClick = (anchor) => () => {
    onClose(); // Close mobile menu if open
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      console.log(`Element with id ${id} not found`);
    }
  };

  const handleScroll = () => {
    if (window.scrollY > prevScrollY.current && window.scrollY > 12) {
      setScrollingDown(true);
    } else {
      setScrollingDown(false);
    }
    prevScrollY.current = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollingDown]);

  // Nav items
  const navItems = [
    { name: "Projects", anchor: "projects" },
    { name: "Contact me", anchor: "contactme" },
  ];

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      transform={scrollingDown ? "translateY(-100%)" : "translateY(0)"}
      transition="transform 0.3s ease-in-out"
      backgroundColor="rgba(0, 0, 0, 0.8)"
      backdropFilter="blur(10px)"
      borderBottom="1px solid rgba(255, 255, 255, 0.1)"
      zIndex={1000}
      ref={headerRef}
    >
      <Flex 
        color="white" 
        maxWidth="1280px" 
        margin="0 auto" 
        px={{ base: 4, md: 8 }}
        py={3}
        justifyContent="space-between"
        alignItems="center"
      >
        <Heading 
          as="h1" 
          size="md" 
          bgGradient="linear(to-r, blue.200, purple.200)"
          bgClip="text"
          fontWeight="bold"
        >
          KB
        </Heading>
        
        {/* Desktop Navigation */}
        {!isMobile ? (
          <Flex justifyContent="space-between" width="100%" ml={8} alignItems="center">
            <HStack spacing={6}>
              {socials.map((social, index) => (
                <a 
                  key={index} 
                  href={social.url} 
                  aria-label={social.label}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Box 
                    transition="all 0.3s ease"
                    _hover={{ 
                      transform: "translateY(-3px)",
                      color: "blue.200"
                    }}
                  >
                    <FontAwesomeIcon icon={social.icon} size="lg" />
                  </Box>
                </a>
              ))}
            </HStack>
            
            <HStack spacing={8}>
              {navItems.map((item, index) => (
                <Box
                  key={index}
                  position="relative"
                  _after={{
                    content: '""',
                    position: "absolute",
                    width: "0%",
                    height: "2px",
                    bottom: "-6px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    bgGradient: "linear(to-r, blue.200, purple.200)",
                    transition: "all 0.3s ease-in-out"
                  }}
                  _hover={{
                    _after: {
                      width: "100%"
                    },
                    color: "blue.200"
                  }}
                >
                  <Text
                    fontSize="md"
                    fontWeight="semibold"
                    cursor="pointer"
                    onClick={handleClick(item.anchor)}
                    transition="all 0.3s ease"
                  >
                    {item.name}
                  </Text>
                </Box>
              ))}
            </HStack>
          </Flex>
        ) : (
          <>
            {/* Mobile Hamburger Menu */}
            <IconButton
              aria-label="Open Menu"
              icon={<HamburgerIcon />}
              variant="ghost"
              colorScheme="whiteAlpha"
              size="md"
              onClick={onOpen}
            />
            
            {/* Mobile Menu Drawer */}
            <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xs">
              <DrawerOverlay />
              <DrawerContent bg="rgba(0, 0, 0, 0.95)" backdropFilter="blur(10px)">
                <DrawerCloseButton color="white" />
                <DrawerBody pt={12}>
                  <VStack spacing={8} align="flex-start">
                    {navItems.map((item, index) => (
                      <Text
                        key={index}
                        fontSize="xl"
                        fontWeight="semibold"
                        color="white"
                        onClick={handleClick(item.anchor)}
                        cursor="pointer"
                        transition="all 0.3s ease"
                        _hover={{ color: "blue.200" }}
                      >
                        {item.name}
                      </Text>
                    ))}
                    
                    <Box pt={8} width="100%">
                      <Text fontSize="sm" color="gray.500" mb={4}>CONNECT</Text>
                      <HStack spacing={6} width="100%">
                        {socials.map((social, index) => (
                          <a 
                            key={index} 
                            href={social.url} 
                            aria-label={social.label}
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            <Box 
                              transition="all 0.3s ease"
                              _hover={{ color: "blue.200" }}
                            >
                              <FontAwesomeIcon icon={social.icon} size="lg" />
                            </Box>
                          </a>
                        ))}
                      </HStack>
                    </Box>
                  </VStack>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </>
        )}
      </Flex>
    </Box>
  );
};

export default Header;
