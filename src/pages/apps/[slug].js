import { NextSeo } from "next-seo";

import Layout from "@/components/Layout";
import Section from "@/components/Section";
import TextBlock from "@/components/TextBlock";
import getMessagingAppBySlug from "@/services/airtable/getMessagingAppBySlug";
import getMessagingAppsList from "@/services/airtable/getMessagingAppsList";
import { SECONDS_IN_A_DAY } from "@/utils/constants";

const App = ({ app }) => {
  return (
    <Layout className="min-h-screen">
      <NextSeo title={app.name} />
      <Section className="flex-grow py-8 md:py-12">
        <TextBlock>
          <h1>{app.name}</h1>
          <h2>{app.shortDescription}</h2>
          <div
            className="mt-8"
            dangerouslySetInnerHTML={{ __html: app.longDescriptionHtml }}
          />
        </TextBlock>
      </Section>
    </Layout>
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
