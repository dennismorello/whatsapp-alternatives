import { Container, Heading } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

import AppsGrid from "@/components/AppsGrid";
import Nav from "@/components/Nav";
import getMessagingAppsList from "@/services/airtable/getMessagingAppsList";
import { SECONDS_IN_A_DAY } from "@/utils/constants";

const Apps = ({ apps }) => {
  return (
    <>
      <NextSeo title="Apps" />
      <Nav />
      <Container as="section" maxW="6xl">
        <Heading as="h1">Apps</Heading>
        <AppsGrid apps={apps} />
      </Container>
    </>
  );
};

export async function getStaticProps() {
  const apps = await getMessagingAppsList();

  return {
    props: { apps },
    revalidate: SECONDS_IN_A_DAY,
  };
}

export default Apps;
