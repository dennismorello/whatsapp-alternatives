import Link from "next/link";

import Layout from "@/components/Layout";
import Section from "@/components/Section";

const Index = () => {
  return (
    <Layout className="min-h-screen">
      <Section className="flex flex-col justify-center flex-grow">
        <div className="flex flex-col items-center justify-center py-4 md:py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold leading-10 tracking-tight text-blue-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl">
              A curated list of alternative messaging apps to say{" "}
              <span className="text-blue-600">goodbye to WhatsApp.</span>
            </h1>

            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              WhatsApp Alternatives lets you discover a plethora of messaging
              apps. Save your time by comparing different valuable alternatives,
              and choose the one that fits your needs.
            </p>
          </div>

          <div className="mt-12 md:mt-16 lg:mt-20">
            <Link href="/apps">
              <a className="px-8 py-3 text-base font-bold text-white transition bg-blue-600 rounded-md shadow hover:bg-blue-700 md:py-4 md:text-lg lg:text-xl md:px-10 hover:shadow-md">
                Browse Apps &rarr;
              </a>
            </Link>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Index;
