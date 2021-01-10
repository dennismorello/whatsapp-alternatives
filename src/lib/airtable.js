import Airtable from "airtable";

const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY,
}).base("appp8lFdE0mVeGN1i");

export default base;
