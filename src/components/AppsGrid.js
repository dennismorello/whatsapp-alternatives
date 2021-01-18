import { Link, SimpleGrid } from "@chakra-ui/react";
import NextLink from "next/link";

import AppCard from "@/components/AppCard";
import usePrimaryColor from "@/hooks/usePrimaryColor";

const AppsGrid = ({ apps, ...otherProps }) => {
  const appNameHoverColor = usePrimaryColor();

  return (
    <SimpleGrid columns={[1, null, 2]} spacing={[4, 6, 8]} {...otherProps}>
      {apps.map((app) => (
        <NextLink key={app.id} href={`/apps/${app.slug}`} passHref>
          <Link
            _hover={{
              color: appNameHoverColor,
              textDecoration: "none",
            }}
          >
            <AppCard
              appName={app.name}
              iconUrl={app.icons[0]?.thumbnails.large.url}
              platforms={app.platforms}
              rating={app.rating}
            />
          </Link>
        </NextLink>
      ))}
    </SimpleGrid>
  );
};

export default AppsGrid;
