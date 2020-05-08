const Cache = require("@11ty/eleventy-cache-assets");
require('dotenv').config();

const TOKEN = process.env.DRIBBBLE_TOKEN;

module.exports = async function() {
  let json = await Cache(`https://api.dribbble.com/v2/user/shots?per_page=6&access_token=${TOKEN}`, {
    duration: "1d",
    type: "json"
  });

  return json;
};
