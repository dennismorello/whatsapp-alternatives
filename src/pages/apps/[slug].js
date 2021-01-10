import { NextSeo } from "next-seo";

import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import TextBlock from "@/components/TextBlock";
import getMessagingAppBySlug from "@/services/airtable/getMessagingAppBySlug";
import getMessagingAppsList from "@/services/airtable/getMessagingAppsList";
import { SECONDS_IN_A_DAY } from "@/utils/constants";

const App = ({ app }) => {
  return (
    <>
      <Navbar />
      <Layout>
        <NextSeo title={app.name} />
        <TextBlock className="mx-auto">
          <h1>{app.name}</h1>
          <h2>{app.shortDescription}</h2>
          <div
            className="mt-8"
            dangerouslySetInnerHTML={{ __html: app.longDescriptionHtml }}
          />
        </TextBlock>
      </Layout>
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
