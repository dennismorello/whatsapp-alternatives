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
      <Container
        as="section"
        maxW="6xl"
        mt={[5, 6, 8, 10, 14]}
        pb={[4, 8, 10, 16, 16]}
        px={[4, 8, 12, 16, 20]}
      >
        <Heading
          as="h1"
          fontSize={["3xl", null, null, null, "4xl"]}
          fontWeight="black"
          mb={[8, null, 12]}
          textAlign="center"
        >
          Apps
        </Heading>
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
