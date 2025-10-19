import { test, expect, chromium } from '@playwright/test';
import path from 'node:path';

const dist = path.resolve(process.cwd(), 'dist');

test('Chromium launches with extension and navigates', async () => {
  const context = await chromium.launchPersistentContext('', {
    headless: true,
    args: [
      `--disable-extensions-except=${dist}`,
      `--load-extension=${dist}`
    ]
  });

  const page = await context.newPage();
  await page.goto('https://developer.chrome.com');
  await expect(page).toHaveTitle(/Chrome/i);

  await context.close();
});
