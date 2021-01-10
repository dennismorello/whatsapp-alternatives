import Link from "next/link";

import Layout from "@/components/Layout";

const Index = () => {
  return (
    <>
      <Layout className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-black text-center md:text-5xl lg:text-6xl">
          WhatsApp Alternatives
        </h1>
        <h2 className="mt-2 text-2xl font-bold text-center text-gray-700 md:text-3xl lg:text-4xl md:mt-4 lg:mt-6">
          A curated list of alternative messaging apps
        </h2>

        <div className="mt-12 md:mt-16 lg:mt-20">
          <Link href="/apps">
            <a className="px-8 py-3 text-base font-bold text-white transition bg-green-500 rounded-md shadow hover:bg-green-600 md:py-4 md:text-lg lg:text-xl md:px-10 hover:shadow-md">
              Browse Apps &rarr;
            </a>
          </Link>
        </div>
      </Layout>

      <footer className="bg-gray-200">
        <div className="py-8 mx-auto prose">
          <p className="text-center">
            Copyleft {new Date().getFullYear()},{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://morello.dev"
            >
              Dennis Morello
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Index;
