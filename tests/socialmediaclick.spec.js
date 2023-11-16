import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test.afterEach(async ({ page }) => {
  await page.close();
});

test.use({ launchOptions: { slowMo: 1000 } });

test.describe("Social Media Icon click", () => {
  test("should open new tab with facebook url on click facebook icon", async ({
    page,
    context,
  }) => {
    const [newPage] = await Promise.all([
      context.waitForEvent("page"),
      await page.getByRole("link").nth(2).hover(),
      await page.getByRole("link").nth(2).click(),
    ]);
    await expect(newPage).toHaveURL("https://www.facebook.com/");
  });

  test("should open new tab with google url on click google icon", async ({
    page,
    context,
  }) => {
    const [newPage] = await Promise.all([
      context.waitForEvent("page"),
      page.getByRole("link", { name: "Sign in with Google" }).hover(),
      page.getByRole("link", { name: "Sign in with Google" }).click(),
    ]);
    await expect(newPage).toHaveURL("https://www.google.com/");
  });

  test("should open new tab with apple url on click apple icon", async ({
    page,
    context,
  }) => {
    const [newPage] = await Promise.all([
      context.waitForEvent("page"),
      page.getByRole("link").nth(3).hover(),
      page.getByRole("link").nth(3).click(),
    ]);
    await expect(newPage).toHaveURL("https://www.apple.com/ae/");
  });
});
