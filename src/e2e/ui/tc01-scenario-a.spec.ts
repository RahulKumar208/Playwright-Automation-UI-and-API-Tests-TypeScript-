import { test, expect } from '@playwright/test';

test('TC01 - Scenario A: Verify user can enter new data into the table', async ({ page }) => {
    // Navigate to the URL
    await page.goto('https://demoqa.com/');
    
    // Navigate to "Elements" and then "Web Tables"
    await page.click("//*[@class='card-body']//*[text()='Elements']");
    await page.click("//li//*[text()='Web Tables']");

    // Click on the "Add" button
    await page.click("//button[@id='addNewRecordButton']");

    // Fill out the form fields
    await page.fill("//input[@placeholder='First Name']", 'Alden');
    await page.fill("//input[@placeholder='Last Name']", 'Cantrell');
    await page.fill("//input[@id='userEmail']", 'test@test.com');
    await page.fill("//input[@id='age']", '30');
    await page.fill("//input[@id='salary']", '12345');
    await page.fill("//input[@id='department']", 'QA');

    // Submit the form
    await page.click("//button[@id='submit']");

    // Assertions to verify the new data
    const rowText = await page.locator("//div[contains(@class,'rt-tr') and @role='row' and descendant::*[text()='30']]").textContent();
    expect(rowText).toContain('Alden');
    expect(rowText).toContain('Cantrell');
    expect(rowText).toContain('30');
    expect(rowText).toContain('test@test.com');
    expect(rowText).toContain('12345');
    expect(rowText).toContain('QA');
});