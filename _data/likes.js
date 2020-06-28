const { RemoteAssetCache } = require('@11ty/eleventy-cache-assets');;
require('dotenv').config();

const USERNAME = process.env.PINBOARD_USERNAME;
const PASSWORD = process.env.PINBOARD_PASSWORD;

class PinboardAssetCache extends RemoteAssetCache {
  async getResponseValue(response, type) {
    if(type === "json") {
      let text = await response.text();
      return JSON.parse(text.trim());
    } else if(type === "text") {
      return response.text();
    }
    return response.buffer();
  }
}

async function PinboardCache(url, options) {
  let asset = new PinboardAssetCache(url, options.directory);
  return asset.fetch(options);
}

module.exports = PinboardCache(`https://${USERNAME}:${PASSWORD}@api.pinboard.in/v1/posts/all?format=json&tag=like`, {
   duration: '1h',
   type: 'json',
 });
