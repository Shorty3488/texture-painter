const puppeteer = require('puppeteer');

describe('Texture Painter', () => {
  let browser, page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:8000');
  });

  afterAll(async () => {
    await browser.close();
  });

  test('loads Three.js correctly', async () => {
    const threeLoaded = await page.evaluate(() => {
      return typeof THREE !== 'undefined';
    });
    expect(threeLoaded).toBe(true);
  });

  test('Fabric.js canvas exists', async () => {
    const canvasExists = await page.evaluate(() => {
      return document.getElementById('fabricCanvas') !== null;
    });
    expect(canvasExists).toBe(true);
  });
});
