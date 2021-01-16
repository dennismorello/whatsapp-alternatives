import getRandomMessagingApp from "@/services/airtable/getRandomMessagingApp";

const getRandomApp = async (req, res) => {
  const { method } = req;

  if (method === "GET") {
    const randomApp = await getRandomMessagingApp();
    res.status(200).json(randomApp);
    return;
  }

  res.status(405).end(`Method ${method} Not Allowed`);
};

export default getRandomApp;
