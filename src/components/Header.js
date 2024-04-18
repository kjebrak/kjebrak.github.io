import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: kjoetertech@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/kjebrak/",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/kjetil-brakstad/",
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

  const handleClick = (anchor) => () => {
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
    if (window.scrollY > prevScrollY.current) {
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

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={scrollingDown ? -headerRef.current.offsetHeight : "0"}
      // transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      ref={headerRef}
      transform="auto"
      // width={"100%"}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {/* Add social media links based on the `socials` data */}
            <HStack spacing="20px">
              {socials.map((obj) => {
                return (
                  <a href={obj.url} mr="2">
                    <FontAwesomeIcon icon={obj.icon} size="2x" />
                  </a>
                );
              })}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8} ml={"20px"}>
              {/* Add links to Projects and Contact me section */}
              <a
                onClick={handleClick("projects")}
                style={{ cursor: "pointer" }}
                href="#projects"
              >
                Projects
              </a>
              <a
                onClick={handleClick("contactme")}
                href="#contact-me"
                style={{ cursor: "pointer" }}
              >
                Contact me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
