import { Box, Container, VStack, Text, Heading, SimpleGrid, HStack, Button } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

const BookingConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const bookingDetails = location.state;

  if (!bookingDetails) {
    return (
      <Container maxW="container.md" py={16}>
        <Heading as="h2" size="xl" textAlign="center" mb={8}>No Booking Details Found</Heading>
        <Button colorScheme="blue" onClick={() => navigate("/")}>Go Back to Home</Button>
      </Container>
    );
  }

  return (
    <Container maxW="container.md" py={16}>
      <VStack spacing={8}>
        <Heading as="h2" size="xl" textAlign="center">Booking Confirmation</Heading>
        <Box bg="gray.100" p={8} borderRadius="md" width="100%">
          <SimpleGrid columns={2} spacing={4}>
            <Text fontWeight="bold">Airline:</Text>
            <Text>{bookingDetails.airline}</Text>
            <Text fontWeight="bold">Departure Time:</Text>
            <Text>{bookingDetails.departureTime}</Text>
            <Text fontWeight="bold">Arrival Time:</Text>
            <Text>{bookingDetails.arrivalTime}</Text>
            <Text fontWeight="bold">Duration:</Text>
            <Text>{bookingDetails.duration}</Text>
            <Text fontWeight="bold">Price:</Text>
            <Text>{bookingDetails.price}</Text>
            <Text fontWeight="bold">Passengers:</Text>
            <Text>{bookingDetails.passengers}</Text>
            <Text fontWeight="bold">Confirmation Number:</Text>
            <Text>{bookingDetails.confirmationNumber}</Text>
          </SimpleGrid>
        </Box>
        <Button colorScheme="blue" onClick={() => navigate("/")}>Go Back to Home</Button>
      </VStack>
    </Container>
  );
};

export default BookingConfirmation;