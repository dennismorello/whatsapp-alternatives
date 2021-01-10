import base from "@/lib/airtable";

const getMessagingAppsList = async () => {
  const allRecords = [];

  return new Promise((resolve, reject) => {
    base("Apps")
      .select({
        fields: ["Name", "Slug", "Icon URL"],
        sort: [{ field: "Name", direction: "asc" }],
      })
      .eachPage(
        (records, fetchNextPage) => {
          records.forEach((record) => {
            const id = record.getId();
            const name = record.get("Name");
            const slug = record.get("Slug");
            const iconUrl = record.get("Icon URL");

            allRecords.push({ id, name, slug, iconUrl });
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
