import { Container, Spinner, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import { useEffect } from "react";

import Nav from "@/components/Nav";
import usePrimaryColor from "@/hooks/usePrimaryColor";
import { fetchJson } from "@/utils/fetch";

const Random = () => {
  const spinnerColor = usePrimaryColor();
  const router = useRouter();

  useEffect(() => {
    const redirectToRandomAppPage = async () => {
      const randomApp = await fetchJson("/api/apps/random");
      router.replace(`/apps/${randomApp.slug}`);
    };

    redirectToRandomAppPage();
  }, [router]);

  return (
    <>
      <NextSeo title="I'm Feeling Lucky" />
      <Nav />
      <Container as="section" maxW="6xl">
        <VStack
          mt={[16, null, 20, 28]}
          pb={[20, null, 28, 32]}
          spacing={[3, null, 4]}
        >
          <Spinner color={spinnerColor} boxSize={[6, 8, 10]} />
          <Text fontSize={["md", null, "lg"]}>Picking an app...</Text>
        </VStack>
      </Container>
    </>
  );
};

export default Random;
