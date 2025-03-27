import * as React from "react";
import { VStack, Box } from "@chakra-ui/react";

/**
 * A responsive full-screen section component with support for background images and gradients
 */
const FullScreenSection = ({ 
  children, 
  isDarkBackground, 
  backgroundColor, 
  backgroundImage,
  ...boxProps 
}) => {
  return (
    <Box
      backgroundColor={backgroundColor}
      backgroundImage={backgroundImage}
      color={isDarkBackground ? "white" : "black"}
      width="100%"
      minHeight={boxProps.minHeight || "100vh"}
      position="relative"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundAttachment={boxProps.parallax ? "fixed" : "scroll"}
    >
      <VStack
        maxWidth="1280px"
        minHeight={boxProps.minHeight || "100vh"}
        width="100%"
        margin="0 auto"
        justifyContent={boxProps.justifyContent || "center"}
        alignItems={boxProps.alignItems || "center"}
        spacing={boxProps.spacing || 8}
        px={{ base: 4, md: 8 }}
        py={boxProps.py || { base: 16, md: 24 }}
        position="relative"
        zIndex={1}
      >
        {children}
      </VStack>
    </Box>
  );
};

export default FullScreenSection;
