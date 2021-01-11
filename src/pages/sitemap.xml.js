import getMessagingAppsList from "@/services/airtable/getMessagingAppsList";
import createSitemap from "@/utils/sitemap";

const Sitemap = () => null;

export async function getServerSideProps({ res }) {
  const apps = await getMessagingAppsList();

  res.setHeader("Content-Type", "application/xml");
  res.write(createSitemap(apps));
  res.end();

  return { props: {} };
}

export default Sitemap;
