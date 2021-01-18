import base from "@/lib/airtable";

const getMessagingAppsList = async () => {
  const allRecords = [];

  return new Promise((resolve, reject) => {
    base("Apps")
      .select({
        sort: [{ field: "Name", direction: "asc" }],
      })
      .eachPage(
        (records, fetchNextPage) => {
          records.forEach((record) => {
            const id = record.getId();
            const name = record.get("Name");
            const slug = record.get("Slug");
            const icons = record.get("Icons") ?? [];
            const rating = record.get("Rating") ?? null;

            allRecords.push({ id, name, slug, icons, rating });
          });

          fetchNextPage();
        },
        (error) => {
          if (error) {
            reject(error);
          }

          resolve(allRecords);
        }
      );
  });
};

export default getMessagingAppsList;
