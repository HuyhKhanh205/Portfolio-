const { chromium } = require('playwright-core');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Desktop
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('file:///' + path.join(__dirname, 'index.html').replace(/\\/g, '/'), { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500);

  // Force all animations visible for screenshot
  await page.evaluate(() => {
    document.querySelectorAll('.anim').forEach(el => el.classList.add('in'));
  });
  await page.waitForTimeout(300);
  await page.screenshot({ path: path.join(__dirname, 'design-review', 'v2-desktop.png'), fullPage: true });

  // Mobile
  await page.setViewportSize({ width: 375, height: 812 });
  await page.reload({ waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  await page.evaluate(() => {
    document.querySelectorAll('.anim').forEach(el => el.classList.add('in'));
  });
  await page.waitForTimeout(300);
  await page.screenshot({ path: path.join(__dirname, 'design-review', 'v2-mobile.png'), fullPage: true });

  await browser.close();
  console.log('Done.');
})().catch(e => { console.error(e); process.exit(1); });
