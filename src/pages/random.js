import getRandomMessagingApp from "@/services/airtable/getRandomMessagingApp";

const Random = () => null;

export async function getServerSideProps() {
  const { slug } = await getRandomMessagingApp();

  return {
    redirect: {
      destination: `/apps/${slug}`,
      permanent: false,
    },
  };
}

export default Random;
