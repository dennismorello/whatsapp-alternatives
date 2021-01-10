import Link from "next/link";

const Index = () => {
  return (
    <>
      <h1 className="text-4xl font-black">Home</h1>
      <Link href="/apps">
        <a className="px-3 py-2 font-bold text-white bg-lightBlue-600">
          Browse Apps &rarr;
        </a>
      </Link>
    </>
  );
};

export default Index;
