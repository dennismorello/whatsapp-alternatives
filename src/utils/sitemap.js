import prettier from "prettier";

import { WEBSITE_URL } from "@/utils/constants";

const getStaticUrlsForSitemap = () =>
  `<url>
    <loc>${`${WEBSITE_URL}`}</loc>
    <priority>0.8</priority>
    <changefreq>weekly</changefreq>
  </url>
  <url>
    <loc>${`${WEBSITE_URL}/apps`}</loc>
    <changefreq>daily</changefreq>
  </url>
  <url>
    <loc>${`${WEBSITE_URL}/random`}</loc>
    <changefreq>weekly</changefreq>
  </url>`;

const getAppsUrlsForSitemap = (apps) =>
  apps
    .map(
      ({ slug }) =>
        `<url>
          <loc>${`${WEBSITE_URL}/apps/${slug}`}</loc>
          <changefreq>daily</changefreq>
        </url>`
    )
    .join("");

const createSitemap = (apps) => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${getStaticUrlsForSitemap()}
    ${getAppsUrlsForSitemap(apps)}
  </urlset>
  `;

  return prettier.format(sitemap, {
    parser: "html",
    htmlWhitespaceSensitivity: "ignore",
  });
};

export default createSitemap;
