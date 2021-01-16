import getRandomMessagingApp from "@/services/airtable/getRandomMessagingApp";

const getRandomApp = async (req, res) => {
  const randomApp = await getRandomMessagingApp();

  res.status(200).json(randomApp);
};

export default getRandomApp;
