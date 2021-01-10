import { NextSeo } from "next-seo";

import getMessagingAppBySlug from "@/services/airtable/getMessagingAppBySlug";
import getMessagingAppsList from "@/services/airtable/getMessagingAppsList";
import { SECONDS_IN_A_DAY } from "@/utils/constants";

const App = ({ app }) => {
  return (
    <>
      <NextSeo title={app.name} />
      <h1 className="text-4xl font-black">{app.name}</h1>
      <p>{app.shortDescription}</p>
      <div dangerouslySetInnerHTML={{ __html: app.longDescriptionHtml }} />
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
