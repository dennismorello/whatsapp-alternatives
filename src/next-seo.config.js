import { WEBSITE_URL } from "@/utils/constants";

const defaultSeo = {
  title: "WhatsApp Alternatives – A curated list of valuable messaging apps",
  titleTemplate: "%s | WhatsApp Alternatives",
  description:
    "Curated list of valuable messaging apps to say goodbye to WhatsApp.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: WEBSITE_URL,
    site_name: "WhatsApp Alternatives",
  },
};

export default defaultSeo;
