import {
  Container,
  Flex,
  HStack,
  Link,
  List,
  ListItem,
} from "@chakra-ui/react";
import NextLink from "next/link";

import Logo from "@/components/Logo";

const Nav = (props) => (
  <Container as="nav" maxW="6xl" {...props}>
    <Flex align="center" justify="space-between" py={4}>
      <NextLink href="/">
        <a>
          <Logo />
        </a>
      </NextLink>

      <HStack as={List} spacing={8}>
        <ListItem>
          <NextLink href="/apps" passHref>
            <Link>Apps</Link>
          </NextLink>
        </ListItem>
        <ListItem>
          <Link
            href="https://github.com/dennismorello/whatsapp-alternatives"
            isExternal
          >
            GitHub
          </Link>
        </ListItem>
      </HStack>
    </Flex>
  </Container>
);

export default Nav;
