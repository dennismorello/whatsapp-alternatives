import Airtable from "airtable";

const base = new Airtable({
  apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
}).base("appp8lFdE0mVeGN1i");

export default base;
