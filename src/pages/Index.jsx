import { Box, Container, VStack, Text, Image, Input, Button, HStack, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { FaPlane, FaHotel, FaCar } from "react-icons/fa";

const Index = () => {
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [flightResults, setFlightResults] = useState([]);

  const handleFlightSearch = () => {
    // Mock flight search results
    const results = [
      {
        airline: "Airline A",
        departureTime: "10:00 AM",
        arrivalTime: "12:00 PM",
        duration: "2h",
        price: "$200",
      },
      {
        airline: "Airline B",
        departureTime: "2:00 PM",
        arrivalTime: "4:00 PM",
        duration: "2h",
        price: "$250",
      },
    ];
    setFlightResults(results);
  };

  return (
    <Box>
      {/* Navigation Bar */}
      <Box as="nav" bg="blue.600" color="white" py={4}>
        <Container maxW="container.xl" display="flex" justifyContent="space-between" alignItems="center">
          <Heading as="h1" size="lg">TravelBooking</Heading>
          <HStack spacing={8}>
            <Text cursor="pointer">Home</Text>
            <Text cursor="pointer">Destinations</Text>
            <Text cursor="pointer">Bookings</Text>
            <Text cursor="pointer">Contact Us</Text>
          </HStack>
        </Container>
      </Box>

      {/* Hero Section */}
      <Box
        as="section"
        bgImage="url('/images/hero-background.jpg')"
        bgSize="cover"
        bgPosition="center"
        height="60vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Container maxW="container.md" bg="rgba(255, 255, 255, 0.8)" p={8} borderRadius="md">
          <VStack spacing={4}>
            <Heading as="h2" size="xl" textAlign="center">Find Your Perfect Trip</Heading>
            <HStack spacing={4} width="100%">
              <Input placeholder="Departure" value={departure} onChange={(e) => setDeparture(e.target.value)} />
              <Input placeholder="Arrival" value={arrival} onChange={(e) => setArrival(e.target.value)} />
            </HStack>
            <HStack spacing={4} width="100%">
              <Input type="date" placeholder="Departure Date" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} />
              <Input type="date" placeholder="Return Date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} />
            </HStack>
            <HStack spacing={4} width="100%">
              <Input type="number" placeholder="Passengers" value={passengers} onChange={(e) => setPassengers(e.target.value)} min={1} />
              <Button colorScheme="blue" onClick={handleFlightSearch}>Search Flights</Button>
            </HStack>
          </VStack>
        </Container>
      </Box>

      {/* Featured Destinations */}
      <Container maxW="container.xl" py={16}>
        <Heading as="h3" size="lg" mb={8}>Featured Destinations</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          <Box bg="gray.100" p={4} borderRadius="md">
            <Image src="https://via.placeholder.com/300" alt="Destination 1" borderRadius="md" />
            <Text mt={2} fontSize="lg" fontWeight="bold">Destination 1</Text>
            <Text>Explore the beauty of Destination 1.</Text>
          </Box>
          <Box bg="gray.100" p={4} borderRadius="md">
            <Image src="https://via.placeholder.com/300" alt="Destination 2" borderRadius="md" />
            <Text mt={2} fontSize="lg" fontWeight="bold">Destination 2</Text>
            <Text>Discover the wonders of Destination 2.</Text>
          </Box>
          <Box bg="gray.100" p={4} borderRadius="md">
            <Image src="https://via.placeholder.com/300" alt="Destination 3" borderRadius="md" />
            <Text mt={2} fontSize="lg" fontWeight="bold">Destination 3</Text>
            <Text>Experience the charm of Destination 3.</Text>
          </Box>
        </SimpleGrid>
      </Container>

      {flightResults.length > 0 && (
        <Container maxW="container.xl" py={16}>
          <Heading as="h3" size="lg" mb={8}>Flight Results</Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            {flightResults.map((flight, index) => (
              <Box key={index} bg="gray.100" p={4} borderRadius="md">
                <Text fontSize="lg" fontWeight="bold">{flight.airline}</Text>
                <Text>Departure: {flight.departureTime}</Text>
                <Text>Arrival: {flight.arrivalTime}</Text>
                <Text>Duration: {flight.duration}</Text>
                <Text>Price: {flight.price}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      )}

      {/* Special Offers */}
      <Box bg="blue.50" py={16}>
        <Container maxW="container.xl">
          <Heading as="h3" size="lg" mb={8}>Special Offers</Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            <Box bg="white" p={4} borderRadius="md" boxShadow="md">
              <Text fontSize="lg" fontWeight="bold">Offer 1</Text>
              <Text>Get 20% off on your next trip to Destination 1.</Text>
            </Box>
            <Box bg="white" p={4} borderRadius="md" boxShadow="md">
              <Text fontSize="lg" fontWeight="bold">Offer 2</Text>
              <Text>Save $100 on bookings for Destination 2.</Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Customer Testimonials */}
      <Container maxW="container.xl" py={16}>
        <Heading as="h3" size="lg" mb={8}>Customer Testimonials</Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          <Box bg="gray.100" p={4} borderRadius="md">
            <Text fontSize="lg" fontWeight="bold">Customer 1</Text>
            <Text>"Amazing experience! Highly recommend TravelBooking."</Text>
          </Box>
          <Box bg="gray.100" p={4} borderRadius="md">
            <Text fontSize="lg" fontWeight="bold">Customer 2</Text>
            <Text>"Great deals and excellent customer service."</Text>
          </Box>
        </SimpleGrid>
      </Container>

      {/* Footer */}
      <Box as="footer" bg="blue.600" color="white" py={8}>
        <Container maxW="container.xl" display="flex" justifyContent="space-between" alignItems="center">
          <Text>&copy; 2023 TravelBooking. All rights reserved.</Text>
          <HStack spacing={4}>
            <Text cursor="pointer">Terms of Service</Text>
            <Text cursor="pointer">Privacy Policy</Text>
            <HStack spacing={2}>
              <Text cursor="pointer">Facebook</Text>
              <Text cursor="pointer">Twitter</Text>
              <Text cursor="pointer">Instagram</Text>
            </HStack>
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;