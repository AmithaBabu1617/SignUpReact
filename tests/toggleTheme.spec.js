// @ts-check
import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test.afterEach(async ({ page }) => {
  await page.close();
});

test.use({ launchOptions: { slowMo: 1000 } });

test.describe("Theme change", () => {
  test("should be able to use theme switch", async ({ page }) => {
    const locator = page.getByRole("checkbox", { name: "toggle-theme" });

    //check if by default theme switch to be false
    expect(await locator.isChecked()).toBeFalsy();
    await locator.check();
    await page.evaluate(() => {
      let sessionData = { darkMode: true };
      window.localStorage.setItem("data", JSON.stringify(sessionData));
    });
    await expect(locator).toBeChecked();
    await expect(
      page.evaluate(() => {
        let darkMode = window.localStorage.getItem("darkMode");
        console.log(JSON.parse(darkMode));
      })
    ).toBeTruthy();
    await locator.uncheck();
    expect(await locator.isChecked()).toBeFalsy();
    expect(
      await page.evaluate(() => window.localStorage.getItem("darkMode"))
    ).toBe("false");
  });
});
