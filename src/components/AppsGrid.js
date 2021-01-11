import Link from "next/link";

import AppShortcut from "@/components/AppShortcut";

const AppsGrid = ({ apps, ...otherProps }) => (
  <div {...otherProps}>
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
);

export default AppsGrid;
