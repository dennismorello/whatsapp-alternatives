import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";

import Nav from "@/components/Nav";
import ResponsiveButton from "@/components/ResponsiveButton";
import usePrimaryColor from "@/hooks/usePrimaryColor";

const Index = () => {
  const titleColor = usePrimaryColor();
  const subtitleColor = useColorModeValue("gray.500", "gray.400");

  return (
    <>
      <Nav />
      <Container
        as="section"
        maxW="6xl"
        mt={[10, 12, 16, 20, 28]}
        pb={[8, 16, 20, 28, 32]}
      >
        <Heading
          as="h1"
          fontSize={["4xl", "5xl", "6xl"]}
          fontWeight="extrabold"
          textAlign="center"
        >
          <Box>A curated list of apps</Box>
          <Box color={titleColor}>to say goodbye to WhatsApp</Box>
        </Heading>
        <Text
          color={subtitleColor}
          mt={[3, 5]}
          fontSize={["md", "lg", "xl"]}
          maxW={["md", "lg", "xl", "2xl"]}
          mx="auto"
          textAlign="center"
        >
          Browse and compare the best messaging apps. Be aware of features,
          privacy and cost of each app, so you can&apos;t really pick wrong.
        </Text>

        <Stack direction={["column", "row"]} justify="center" mt={[5, 8]}>
          <NextLink href="/apps" passHref>
            <ResponsiveButton colorScheme="cyan">Browse Apps</ResponsiveButton>
          </NextLink>
          <NextLink href="/random" passHref>
            <ResponsiveButton colorScheme="cyan" variant="outline">
              I&apos;m Feeling Lucky
            </ResponsiveButton>
          </NextLink>
        </Stack>
      </Container>
    </>
  );
};

export default Index;
