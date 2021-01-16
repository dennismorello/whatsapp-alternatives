import { Link, SimpleGrid } from "@chakra-ui/react";
import NextLink from "next/link";

import AppShortcut from "@/components/AppShortcut";

const AppsGrid = ({ apps, ...otherProps }) => (
  <SimpleGrid columns={[2, null, 3, 4]} spacing={8} {...otherProps}>
    {apps.map((app) => (
      <NextLink key={app.id} href={`/apps/${app.slug}`} passHref>
        <Link>
          <AppShortcut appName={app.name} iconUrl={app.iconUrl} />
        </Link>
      </NextLink>
    ))}
  </SimpleGrid>
);

export default AppsGrid;
