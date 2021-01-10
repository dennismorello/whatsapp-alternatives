import base from "@/lib/airtable";
import markdownToHtml from "@/lib/markdown";

const getMessagingAppBySlug = async (slug) =>
  new Promise((resolve, reject) => {
    base("Apps")
      .select({ filterByFormula: `{Slug} = "${slug}"` })
      .firstPage(async (error, records) => {
        if (error) {
          reject(error);
        }

        const app = records[0];

        const id = app.getId();
        const name = app.get("Name");
        const website = app.get("Website");
        const shortDescription = app.get("Short Description") ?? null;
        const longDescription = app.get("Long Description") ?? null;
        const longDescriptionHtml = longDescription
          ? await markdownToHtml(longDescription)
          : null;

        resolve({
          id,
          name,
          shortDescription,
          longDescriptionHtml,
          website,
          slug,
        });
      });
  });

export default getMessagingAppBySlug;
