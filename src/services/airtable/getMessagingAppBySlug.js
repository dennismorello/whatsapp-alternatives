import base from "@/lib/airtable";
import markdownToHtml from "@/lib/markdown";

const getMessagingAppBySlug = async (slug) =>
  new Promise((resolve, reject) => {
    base("Apps")
      .select({ filterByFormula: `{Slug} = "${slug}"` })
      .firstPage((error, records) => {
        if (error) {
          reject(error);
        }

        const app = records[0];

        const id = app.getId();
        const name = app.get("Name");
        const icons = app.get("Icons") ?? [];
        const platforms = app.get("Platforms") ?? null;
        const rating = app.get("Rating") ?? null;
        const website = app.get("Website") ?? null;
        const shortDescription = app.get("Short Description") ?? null;
        const longDescription = app.get("Long Description") ?? null;
        const longDescriptionHtml = longDescription
          ? markdownToHtml(longDescription)
          : null;

        resolve({
          id,
          name,
          slug,
          icons,
          shortDescription,
          longDescriptionHtml,
          platforms,
          rating,
          website,
        });
      });
  });

export default getMessagingAppBySlug;
