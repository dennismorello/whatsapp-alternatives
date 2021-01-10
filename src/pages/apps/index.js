import Link from "next/link";
import { NextSeo } from "next-seo";

import AppShortcut from "@/components/AppShortcut";
import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import getMessagingAppsList from "@/services/airtable/getMessagingAppsList";
import { SECONDS_IN_A_DAY } from "@/utils/constants";

const Apps = ({ apps }) => {
  return (
    <>
      <Navbar />
      <Layout>
        <NextSeo title="Apps" />
        <h1 className="text-5xl font-black text-center">Apps</h1>

        <div className="max-w-sm mx-auto mt-16 md:max-w-xl lg:max-w-3xl">
          <ul className="grid grid-cols-2 gap-12 place-items-center md:grid-cols-3 lg:grid-cols-4">
            {apps.map((app) => (
              <Link key={app.id} href={`/apps/${app.slug}`}>
                <a>
                  <AppShortcut appName={app.name} iconUrl={app.iconUrl} />
                </a>
              </Link>
            ))}
          </ul>
        </div>
      </Layout>
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
