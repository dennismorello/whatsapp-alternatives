import {
  Box,
  Container,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const Hero = ({ title, subtitle, children, ...otherProps }) => {
  const subtitleColor = useColorModeValue("gray.500", "gray.400");

  return (
    <Container
      as="section"
      maxW="6xl"
      mt={[10, 12, 16, 20, 28]}
      pb={[8, 16, 20, 28, 32]}
      {...otherProps}
    >
      <Heading
        as="h1"
        fontSize={["4xl", "5xl", "6xl"]}
        fontWeight="extrabold"
        textAlign="center"
      >
        {title}
      </Heading>

      <Text
        color={subtitleColor}
        fontSize={["md", "lg", "xl"]}
        maxW={["md", "lg", "xl", "2xl"]}
        mt={[3, 5]}
        mx="auto"
        textAlign="center"
      >
        {subtitle}
      </Text>

      <Box mt={[5, 8]}>{children}</Box>
    </Container>
  );
};

export default Hero;
