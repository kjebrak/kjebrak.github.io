import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, Text, Container, SimpleGrid, Flex } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Slotability",
    description:
      "Calculate probablity distributions for payouts and return-to-player (RTP) for slot machines based on the reel layout, betline layout and payment structure",
    getImageSrc: () => require("../images/slotability_logo.webp"),
  },
  {
    title: "Placeholder Project",
    description:
      "Placeholder project description",
    getImageSrc: () => require("../images/photo2.jpg"),
  },
  {
    title: "Placeholder Project",
    description:
      "Placeholder project description",
    getImageSrc: () => require("../images/photo3.jpg"),
  },
  {
    title: "Placeholder Project",
    description:
      "Placeholder project description",
    getImageSrc: () => require("../images/photo4.jpg"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundImage="linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)"
      isDarkBackground
      py={16}
      alignItems="center"
      spacing={16}
    >
      <Container maxWidth="1200px" px={8}>
        <Flex 
          direction="column" 
          alignItems="center" 
          mb={12}
        >
          <Box 
            position="relative" 
            mb={4}
            _before={{
              content: '""',
              position: 'absolute',
              bottom: '-10px',
              width: '60px',
              height: '4px',
              backgroundColor: 'blue.300',
              borderRadius: 'full',
              left: '50%',
              transform: 'translateX(-50%)'
            }}
          >
            <Heading 
              as="h1" 
              id="projects-section"
              fontSize={{ base: "3xl", md: "4xl" }}
              fontWeight="bold"
              textAlign="center"
              bgGradient="linear(to-r, blue.100, purple.100)"
              bgClip="text"
            >
              Featured Projects
            </Heading>
          </Box>
          <Text 
            fontSize={{ base: "md", md: "lg" }} 
            color="blue.100" 
            textAlign="center"
            maxWidth="700px"
            opacity={0.8}
          >
            Explore some of my recent work and personal projects
          </Text>
        </Flex>
        
        <SimpleGrid 
          columns={{ base: 1, md: 2 }} 
          spacing={8}
          width="100%"
        >
          {projects.map((project) => (
            <Card
              key={project.title}
              title={project.title}
              description={project.description}
              imageSrc={project.getImageSrc()}
            />
          ))}
        </SimpleGrid>
      </Container>
    </FullScreenSection>
  );
};

export default ProjectsSection;
