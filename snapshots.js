const PercyScript = require('@percy/script');

PercyScript.run(async (page, percySnapshot) => {
  await page.goto('http://localhost:8080/');
  await page.waitFor('.intro');
  await percySnapshot('homepage');
});
