const Cache = require("@11ty/eleventy-cache-assets");
require('dotenv').config();

const USERNAME = process.env.PINBOARD_USERNAME;
const PASSWORD = process.env.PINBOARD_PASSWORD;

module.exports = async function() {
  let json = await Cache(`https://${USERNAME}:${PASSWORD}@api.pinboard.in/v1/posts/all?format=json&tag=like`, {
    duration: "1d",
    type: "json"
  });

  return json;
};
