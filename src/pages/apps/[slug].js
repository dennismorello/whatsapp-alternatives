import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";

import AppIcon from "@/components/AppIcon";
import Nav from "@/components/Nav";
import getMessagingAppBySlug from "@/services/airtable/getMessagingAppBySlug";
import getMessagingAppsList from "@/services/airtable/getMessagingAppsList";
import { SECONDS_IN_A_DAY } from "@/utils/constants";

const App = ({ app }) => {
  const descriptionColor = useColorModeValue("gray.500", "gray.400");

  return (
    <>
      <NextSeo title={app.name} />
      <Nav />
      <Container
        as="section"
        maxW="6xl"
        mt={[6, null, 8, 10, 14]}
        pb={[12, null, 16, 20, 28]}
        px={[4, 8, 12, 16, 20]}
      >
        <Stack
          align="center"
          direction={["row-reverse", null, "row"]}
          spacing={4}
        >
          <AppIcon
            alt={`${app.name} icon`}
            iconUrl={app.icons[0]?.thumbnails.large.url}
            size={[16, null, 20]}
          />

          <VStack align="flex-start" flexGrow={1} spacing={[0, null, 2]}>
            <Heading as="h1" fontWeight="black">
              {app.name}
            </Heading>
            <Text
              color={descriptionColor}
              fontSize={["lg", null, "xl"]}
              fontWeight="semibold"
            >
              {app.shortDescription}
            </Text>
          </VStack>
        </Stack>

        <Box
          mt={[8, null, 12]}
          dangerouslySetInnerHTML={{ __html: app.longDescriptionHtml }}
          fontSize={["md", null, "lg"]}
          css={{
            "p:not(:first-of-type)": {
              marginTop: "1.25rem",
            },
            "ol, ul": {
              marginTop: "1.5rem",
              marginLeft: "2rem",
            },
            "li:not(:first-of-type)": {
              marginTop: "0.75rem",
            },
          }}
        />
      </Container>
    </>
  );
};

export async function getStaticPaths() {
  const apps = await getMessagingAppsList();
  const paths = apps.map(({ slug }) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const app = await getMessagingAppBySlug(params.slug);

  return {
    props: { app },
    revalidate: SECONDS_IN_A_DAY,
  };
}

export default App;
