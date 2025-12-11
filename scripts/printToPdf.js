import puppeteer from "puppeteer";
import path from "path";
import * as fs from "fs";

(async () => {
  const __dirname = import.meta.dirname;

  const personalDetails = JSON.parse(
    fs.readFileSync(
      "/home/felix/clones/printable-portfolio/src/data/personalDetails.json"
    )
  );

  const idToFilename = personalDetails.reduce((acc, curr) => {
    acc[curr.id] = curr.cvFilename;
    return acc;
  }, {});

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`file://${path.join(__dirname, "../dist/en/index.html")}`);
  await page.pdf({
    path: `./public/${idToFilename["en"]}`,
    format: "A4",
  });

  await page.goto(`file://${path.join(__dirname, "../dist/de/index.html")}`);
  await page.pdf({
    path: `./public/${idToFilename["de"]}`,
    format: "A4",
  });
  await browser.close();
})();
