// @ts-check
const { test, expect } = require('@playwright/test');

// test('homepage has title and links to intro page', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);

//   // create a locator
//   const getStarted = page.getByRole('link', { name: 'Get started' });

//   // Expect an attribute "to be strictly equal" to the value.
//   await expect(getStarted).toHaveAttribute('href', '/docs/intro');

//   // Click the get started link.
//   await getStarted.click();
  
//   // Expects the URL to contain intro.
//   await expect(page).toHaveURL(/.*intro/);
// });

test.describe('navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:5085");
  });

  test("home navigation", async ({ page }) => {
    await expect(page).toHaveURL("http://localhost:5085");

    const homeLink = page.getByText("Home");

    await expect(homeLink).toHaveClass('nav-link active');
  });

  test("counter", async ({ page }) => {
    await page.getByRole('link', { name: 'Counter' }).click();

    await page.getByRole('button', { name: 'Click me' }).click();
  
    const counter = page.getByRole('status');

    await expect(counter).toHaveText('Current count: 1');
  });

});
