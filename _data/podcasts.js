const Cache = require("@11ty/eleventy-cache-assets");
require('dotenv').config();

const TOKEN = process.env.AIRTABLE_TOKEN;

module.exports = async function() {
  let json = await Cache(`https://api.airtable.com/v0/appkasSrBifCV7d1e/Podcast%20Subscriptions?sort%5B0%5D%5Bfield%5D=title&sort%5B0%5D%5Bdirection%5D=asc&api_key=${TOKEN}`, {
    duration: "1d",
    type: "json"
  });

  return json.records
};
