import { Heading, HStack, Image, Text, VStack, Box, Icon, Flex } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <Box
      backgroundColor="white"
      borderRadius="xl"
      overflow="hidden"
      boxShadow="0 4px 20px rgba(0,0,0,0.1)"
      transition="all 0.3s ease"
      height="100%"
      position="relative"
      _hover={{
        transform: "translateY(-8px)",
        boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
      }}
    >
      <Box position="relative" overflow="hidden">
        <Image 
          src={imageSrc} 
          alt={title} 
          width="100%"
          height="200px"
          objectFit="cover"
          transition="transform 0.5s ease"
          _groupHover={{ transform: "scale(1.05)" }}
        />
        <Box 
          position="absolute"
          bottom="0"
          left="0"
          width="100%"
          height="60px"
          background="linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))"
        />
      </Box>
      
      <VStack 
        spacing={3} 
        p={5} 
        align="flex-start"
        height="calc(100% - 200px)"
        justifyContent="space-between"
      >
        <Box>
          <Heading 
            as="h3" 
            fontSize="xl" 
            fontWeight="bold" 
            mb={2}
            color="gray.800"
          >
            {title}
          </Heading>
          <Text 
            fontSize="md" 
            color="gray.600"
            lineHeight="tall"
          >
            {description}
          </Text>
        </Box>
        
        <HStack 
          spacing={2}
          color="blue.600"
          fontWeight="semibold"
          fontSize="sm"
          transition="all 0.2s ease"
          _hover={{ 
            color: "blue.500",
            transform: "translateX(4px)"
          }}
          cursor="pointer"
          mt={2}
        >
          <Text>Explore project</Text>
          <Box transform="translateY(1px)">
            <FontAwesomeIcon icon={faArrowRight} />
          </Box>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Card;
