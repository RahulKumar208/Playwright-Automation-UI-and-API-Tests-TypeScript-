import { test, expect } from '@playwright/test';

test('TC02 - Verify broken image', async ({ page }) => {
    // Navigate to the URL
    await page.goto('https://demoqa.com/');

    // Navigate to "Elements" and then "Broken Links - Images"
    await page.click("//*[@class='card-body']//*[text()='Elements']");
    await page.click("//li//*[text()='Broken Links - Images']");

    // Locate the image and check its natural width
    const image = page.locator("//img[@src='/images/Toolsqa_1.jpg']");
    
    // Ensure the image element is present on the page
    const imageCount = await image.count();
    expect(imageCount).toBeGreaterThan(0); // Verify that the image element is found

    // Check if the image is broken by evaluating its naturalWidth
    const naturalWidth = await image.evaluate((img: HTMLImageElement) => img.naturalWidth);

    // Assertion
    expect(naturalWidth).toBe(0);  // This indicates the image is broken
});