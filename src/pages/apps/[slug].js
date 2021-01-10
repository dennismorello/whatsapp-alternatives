import getMessagingAppsList from "@/lib/getMessagingAppsList";
import { SECONDS_IN_A_DAY } from "@/utils/constants";

const App = ({ app }) => {
  return <h1 className="text-4xl font-black">{app.name}</h1>;
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
  const apps = await getMessagingAppsList();
  const app = apps.find((app) => app.slug === params.slug);

  return {
    props: { app },
    revalidate: SECONDS_IN_A_DAY,
  };
}

export default App;
