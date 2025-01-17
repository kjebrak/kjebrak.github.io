import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
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
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            imageProps={{ width: "100%", height: "auto" }}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
