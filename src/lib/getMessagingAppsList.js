const Airtable = require("airtable");

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  "appp8lFdE0mVeGN1i"
);

const getMessagingAppsList = async () => {
  const allRecords = [];

  return new Promise((resolve, reject) => {
    base("Apps")
      .select({
        fields: ["Name", "Slug"],
        sort: [{ field: "Name", direction: "asc" }],
      })
      .eachPage(
        (records, fetchNextPage) => {
          records.forEach((record) => {
            const id = record.getId();
            const name = record.get("Name");
            const slug = record.get("Slug");

            allRecords.push({ id, name, slug });
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
