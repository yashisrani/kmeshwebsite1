// tests/e2e/browser-smoke.spec.js
const { test, expect } = require('@playwright/test');

test('@smoke browser can start', async ({ page, browserName }) => {
  await page.goto('about:blank');
  expect(page.url()).toBe('about:blank');
  console.log(`${browserName} launched OK`);
});