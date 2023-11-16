// @ts-check
const { test, expect } = require("@playwright/test");
test.use({ launchOptions: { slowMo: 500 } });

test.describe("Registeration feature", () => {
  test("should be able to login", async ({ page }) => {
    await page.goto("/");
    const nameLocator = page.getByPlaceholder("Full name");
    const pswdLocator = page.getByPlaceholder("Password");
    const passwordErrorDiv = page.getByText(
      "Password should contains atleast 8 charaters"
    );
    const mailRegEx = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    const mailLocator = page.getByPlaceholder("Email");
    const emailErrorDiv = await page.getByText("Enter a valid email address");

    await expect(nameLocator).toBeEditable();
    await page.getByPlaceholder("Full name").type("amitha");
    await page.getByPlaceholder("Full name").fill("");

    await expect(mailLocator).toBeEditable();
    await mailLocator.fill("amitha");
    expect(await mailLocator.inputValue()).not.toMatch(mailRegEx);
    await expect(emailErrorDiv).toBeVisible();

    await expect(pswdLocator).toBeEditable();
    expect(await pswdLocator.getAttribute("type")).toBe("password");
    await pswdLocator.fill("f1234");
    await expect(pswdLocator).toBeVisible();

    //check password toggle function
    await page
      .getByRole("button", { name: "toggle password visibility" })
      .click();
    expect(await pswdLocator.getAttribute("type")).toBe("text");
    await page
      .getByRole("button", { name: "toggle password visibility" })
      .click();
    expect(await pswdLocator.getAttribute("type")).toBe("password");

    //check submit functionality
    await page.getByRole("button", { name: "Continue" }).hover();
    await page.getByRole("button", { name: "Continue" }).click();
    await page.once("dialog", (dialog) => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.dismiss().catch(() => {});
    });

    await nameLocator.type("amitha");
    await mailLocator.fill("");
    await mailLocator.type("amitha@gmail.com");
    expect(await mailLocator.inputValue()).toMatch(mailRegEx);
    await expect(emailErrorDiv).toBeHidden();
    await pswdLocator.type("Qwts");
    // await page.waitForTimeout(500);
    await expect(passwordErrorDiv).toBeHidden();

    await page.getByRole("button", { name: "Continue" }).hover();
    await page.getByRole("button", { name: "Continue" }).click();
    await page.waitForTimeout(500);
    await expect(page).toHaveURL("/welcome");
    await page.waitForTimeout(500);
  });
});
