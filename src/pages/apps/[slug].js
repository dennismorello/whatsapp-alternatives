import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { NextSeo } from "next-seo";

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
      <Container as="section" maxW="6xl">
        <Breadcrumb>
          <BreadcrumbItem>
            <NextLink href="/" passHref>
              <BreadcrumbLink>Home</BreadcrumbLink>
            </NextLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <NextLink href="/apps" passHref>
              <BreadcrumbLink>Apps</BreadcrumbLink>
            </NextLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink>{app.name}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <Heading as="h1">{app.name}</Heading>
        <Text fontSize={20} color={descriptionColor}>
          {app.shortDescription}
        </Text>

        <Box
          mt={8}
          dangerouslySetInnerHTML={{ __html: app.longDescriptionHtml }}
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
