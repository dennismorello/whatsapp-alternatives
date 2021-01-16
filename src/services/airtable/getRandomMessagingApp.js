import getMessagingAppsList from "./getMessagingAppsList";

const getRandomMessagingApp = async () => {
  const apps = await getMessagingAppsList();
  const randomIndex = (Math.random() * apps.length) | 0;

  return apps[randomIndex];
};

export default getRandomMessagingApp;
