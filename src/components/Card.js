import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack
      backgroundColor="white"
      color={"black"}
      borderRadius={8}
      boxShadow="md"
      spacing={4}
      align={"flex-start"}
    >
      <Image src={imageSrc} alt={title} borderRadius={8}/>
      <Heading as="h3" size="md" textAlign="left" px={4}>
        {title}
      </Heading>
      <Text px={4}>{description}</Text>
      <HStack px={4} textAlign="left">
        <Text>See more</Text>
        <FontAwesomeIcon icon={faArrowRight} />
      </HStack>
    </VStack>
  );
  return null;
};

export default Card;
