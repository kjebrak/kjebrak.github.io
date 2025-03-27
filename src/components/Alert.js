import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogOverlay,
  Flex,
  Icon,
  Box,
} from "@chakra-ui/react";
import { useAlertContext } from "../context/alertContext";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

/**
 * This is a global component that uses context to display a global alert message.
 */
function Alert() {
  const { isOpen, type, message, onClose } = useAlertContext();
  const cancelRef = useRef();
  const isSuccess = type === "success";

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      motionPreset="slideInBottom"
    >
      <AlertDialogOverlay 
        bg="rgba(0, 0, 0, 0.4)"
        backdropFilter="blur(5px)"
      >
        <AlertDialogContent 
          borderRadius="xl" 
          bg={isSuccess ? 'rgba(47, 133, 90, 0.95)' : 'rgba(229, 62, 62, 0.95)'} 
          mx={4}
          border="1px solid" 
          borderColor={isSuccess ? "green.200" : "red.200"}
          boxShadow="0 12px 25px rgba(0, 0, 0, 0.15)"
          backdropFilter="blur(12px)"
          overflow="hidden"
          position="relative"
          _after={{
            content: '""',
            position: 'absolute',
            top: '-50%',
            right: '-50%',
            width: '200%',
            height: '200%',
            background: isSuccess 
              ? 'radial-gradient(circle, rgba(72, 187, 120, 0.1) 0%, transparent 70%)' 
              : 'radial-gradient(circle, rgba(245, 101, 101, 0.1) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        >
          <Box 
            position="absolute"
            top={0}
            left={0}
            width="5px"
            height="100%"
            bg={isSuccess ? "green.300" : "red.300"}
          />
          
          <AlertDialogHeader 
            fontSize="lg" 
            fontWeight="bold" 
            color="white"
            borderBottom="1px solid"
            borderColor={isSuccess ? "green.200" : "red.200"}
            pb={3}
          >
            <Flex alignItems="center" gap={3}>
              <Icon 
                as={FontAwesomeIcon} 
                icon={isSuccess ? faCheckCircle : faExclamationTriangle}
                color={isSuccess ? "green.200" : "red.200"}
                fontSize="xl"
              />
              {isSuccess ? 'Success!' : 'Error!'}
            </Flex>
          </AlertDialogHeader>
          
          <AlertDialogBody 
            py={4} 
            color="white" 
            fontWeight="medium"
            fontSize="md"
          >
            {message}
          </AlertDialogBody>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}

export default Alert;
