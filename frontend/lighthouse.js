import lighthouse from 'lighthouse';
import puppeteer from 'puppeteer';
import fs from 'fs';

const url = 'http://localhost:8000'; // Remplacez par l'URL de votre application

(async () => {
  // Lancez un navigateur sans tête avec Puppeteer
  const browser = await puppeteer.launch({ headless: true });
  const { lhr, report } = await lighthouse(url, {
    port: (new URL(browser.wsEndpoint())).port,
    output: 'html',
    logLevel: 'info',
  });

  // Vérifiez si le rapport est défini
  if (report) {
    // Enregistrez le rapport HTML
    fs.writeFileSync('report.html', report);
    console.log(`Lighthouse score: ${lhr.categories.performance.score * 100}`);
  } else {
    console.error('Le rapport Lighthouse est indéfini.');
  }

  await browser.close();
})();