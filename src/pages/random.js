import { Container, Spinner, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import { useEffect } from "react";

import Nav from "@/components/Nav";
import usePrimaryColor from "@/hooks/usePrimaryColor";
import getRandomMessagingApp from "@/services/airtable/getRandomMessagingApp";

const Random = () => {
  const spinnerColor = usePrimaryColor();
  const router = useRouter();

  useEffect(() => {
    const redirectToRandomAppPage = async () => {
      const randomApp = await getRandomMessagingApp();
      router.replace(`/apps/${randomApp.slug}`);
    };

    redirectToRandomAppPage();
  }, [router]);

  return (
    <>
      <NextSeo title="Random App" />
      <Nav />
      <Container as="section" maxW="6xl">
        <VStack>
          <Spinner color={spinnerColor} size="lg" />
          <Text>Picking an app...</Text>
        </VStack>
      </Container>
    </>
  );
};

export default Random;
