import { test, expect } from '@playwright/test';

test('TC04 - Verify the tooltip', async ({ page }) => {
    // Navigate to the URL
    await page.goto('https://demoqa.com/');

    // Navigate to "Widgets" and then "Tool Tips"
    await page.click("//*[@class='card-body']//*[text()='Widgets']");
    await page.click("//li//*[text()='Tool Tips']");

    // Hover over the button
    await page.hover('//button[@id="toolTipButton"]');

    // Wait for the tooltip to be visible
    const tooltip = await page.locator('.tooltip').textContent(); // Adjust the selector based on the actual tooltip element

    // Assertions to verify the tooltip
    expect(tooltip?.trim()).toBe('You hovered over the Button'); // Use trim() to remove any extra whitespace
});