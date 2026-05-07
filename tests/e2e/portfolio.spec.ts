import { expect, test } from "@playwright/test";

test("portfolio loads, navigates sections, toggles theme, and submits contact form", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Generative-AI Engineer" })).toBeVisible();
  await expect(page.locator("html")).toHaveClass(/dark/);
  await page.getByRole("button", { name: "Toggle theme" }).click();
  await expect(page.locator("html")).not.toHaveClass("dark");

  await page.getByRole("button", { name: "Contact", exact: true }).click();
  await expect
    .poll(async () => page.locator("#contact").evaluate((element) => element.getBoundingClientRect().top))
    .toBeLessThan(200);

  await page.getByLabel("Name").fill("Hemanth");
  await page.getByLabel("Email").fill("hemanth@example.com");
  await page.getByLabel("Message").fill("Testing contact form.");
  await page.getByRole("button", { name: "Send Message" }).click();
  await expect(page.getByText("Thanks! Your message was sent successfully.")).toBeVisible();
});
