import { test, expect } from '@playwright/test';

test('TC01 - Scenario B: Verify user can edit the row in a table', async ({ page }) => {
    // Navigate to the URL
    await page.goto('https://demoqa.com/');

    // Navigate to "Elements" and then "Web Tables"
    await page.click("//*[@class='card-body']//*[text()='Elements']");
    await page.click("//li//*[text()='Web Tables']");

    // Click on the edit icon in the second row
    await page.click('//div[contains(@class, "rt-tr-group")][2]//span[@title="Edit"]');

    // Change the first and last name
    await page.fill('//input[@id="firstName"]', 'Gerimedica');
    await page.fill('//input[@id="lastName"]', 'BV');

    // Save changes
    await page.click('//button[@id="submit"]');

    // Assertions to verify the updated data
    const rowText = await page.locator('//div[contains(@class, "rt-tr-group")][2]').textContent();
    expect(rowText).toContain('Gerimedica');
    expect(rowText).toContain('BV');
});