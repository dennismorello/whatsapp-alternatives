import { NextSeo } from "next-seo";

import AppsGrid from "@/components/AppsGrid";
import Layout from "@/components/Layout";
import Section from "@/components/Section";
import getMessagingAppsList from "@/services/airtable/getMessagingAppsList";
import { SECONDS_IN_A_DAY } from "@/utils/constants";

const Apps = ({ apps }) => {
  return (
    <Layout className="min-h-screen">
      <NextSeo title="Apps" />
      <Section className="flex flex-col justify-center flex-grow">
        <h1 className="text-5xl font-black text-center">Apps</h1>
        <AppsGrid
          apps={apps}
          className="max-w-sm mx-auto mt-16 md:max-w-xl lg:max-w-3xl"
        />
      </Section>
    </Layout>
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
