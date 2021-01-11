import { NextSeo } from "next-seo";

import Layout from "@/components/Layout";
import Section from "@/components/Section";

const Index = () => {
  return (
    <Layout className="min-h-screen">
      <NextSeo title="About" />
      <Section className="flex-grow py-8 md:py-12">
        <h1 className="text-5xl font-black text-center">About</h1>
      </Section>
    </Layout>
  );
};

export default Index;
