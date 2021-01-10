import Link from "next/link";

import getMessagingAppsList from "@/lib/getMessagingAppsList";
import { SECONDS_IN_A_DAY } from "@/utils/constants";

const Apps = ({ apps }) => {
  return (
    <>
      <h1 className="text-4xl font-black">Apps</h1>
      <ul>
        {apps.map((app) => (
          <li key={app.id}>
            <Link href={`/apps/${app.slug}`}>
              <a>{app.name}</a>
            </Link>
          </li>
        ))}
      </ul>
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
