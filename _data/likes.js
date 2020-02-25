const fs = require('fs');
const fetch = require('node-fetch');
require('dotenv').config();

const USERNAME = process.env.PINBOARD_USERNAME;
const PASSWORD = process.env.PINBOARD_PASSWORD;

const CACHE_FILE_PATH = '_cache/likes.json';

module.exports = async function () {
  console.log('>>> Reading from cache...');
	let cache = readFromCache();

  if (cache.length) {
		console.log(`>>> ${cache.length} favorites loaded from cache`);
	}

	console.log(process.env.NODE_ENV)

  if (process.env.NODE_ENV === 'production') {
    console.log('>>> Checking for new favorites...');

    let data = await fetchPinboard();
    const newLikes = checkForNewLikes(cache, data);

    if (newLikes.length) {
      writeToCache(data);
      cache = data;
      return data;
		}
	}
	return cache;
}


async function fetchPinboard() {
	if (!USERNAME || !PASSWORD) {
		console.warn(`>>> unable to fetch Pinboard: missing username or password`);
		return false;
	}

	let url = `https://${USERNAME}:${PASSWORD}@api.pinboard.in/v1/posts/all?format=json&tag=like`;

	const response = await fetch(url);
  if (response.status === 200) {
    const feed = await response.json();
    console.log(feed)
		return feed;
	}

	return null;
}

function checkForNewLikes(oldLikes, newLikes) {
  var newFavorites = [];

  for (var i = newLikes.length - 1; i >= 0; i--) {
    var id = newLikes[i];
    newFavorites.push(id);
    oldLikes.forEach(old => {
			if (id === old.id) {
				newFavorites.pop();
			}
		});
	}

	if (newFavorites.length) {
		console.log(`>>> ${newFavorites.length} new favorites found`);
	} else {
		console.log(`>>> no new favorites found`);
	}

	return newFavorites;
}

function writeToCache(data) {
	const dir = '_cache';
	const fileContent = JSON.stringify(data, null, 2);

  if (!fs.existsSync(dir)) {
		fs.mkdirSync(dir);
	}

  fs.writeFile(CACHE_FILE_PATH, fileContent, err => {
		if (err) throw err;
		console.log(`>>> favorites cached to ${CACHE_FILE_PATH}`);
	})
}

function readFromCache() {
  if (fs.existsSync(CACHE_FILE_PATH)) {
		const cacheFile = fs.readFileSync(CACHE_FILE_PATH);
		return JSON.parse(cacheFile);
	}

	return []
}
