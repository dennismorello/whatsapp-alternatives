import { Box, Stack } from "@chakra-ui/react";
import NextLink from "next/link";

import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import ResponsiveButton from "@/components/ResponsiveButton";
import usePrimaryColor from "@/hooks/usePrimaryColor";

const Index = () => {
  const titleColor = usePrimaryColor();

  return (
    <>
      <Nav />
      <Hero
        title={
          <Box>
            A curated list of apps
            <br />
            <Box as="span" color={titleColor}>
              to say goodbye to WhatsApp
            </Box>
          </Box>
        }
        subtitle="Browse and compare the best messaging apps. Be aware of features,
        privacy and cost of each app, so you can't really pick wrong."
      >
        <Stack direction={["column", "row"]} justify="center">
          <NextLink href="/apps" passHref>
            <ResponsiveButton as="a" colorScheme="cyan">
              Browse Apps
            </ResponsiveButton>
          </NextLink>
          <NextLink href="/random" passHref>
            <ResponsiveButton as="a" colorScheme="cyan" variant="outline">
              I&apos;m Feeling Lucky
            </ResponsiveButton>
          </NextLink>
        </Stack>
      </Hero>
    </>
  );
};

export default Index;
