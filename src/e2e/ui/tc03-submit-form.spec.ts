import { test, expect } from '@playwright/test';

test('TC03 - Verify user can submit the form', async ({ page }) => {
    // Navigate to the URL
    await page.goto('https://demoqa.com/');

    // Navigate to "Forms" and then "Practice Form"
    await page.click("//*[@class='card-body']//*[text()='Forms']");
    await page.click("//li//*[text()='Practice Form']");

    // Fill out the form
    await page.fill('//input[@id="firstName"]', 'Gerimedica');
    await page.fill('//input[@id="lastName"]', 'BV');
    await page.fill('//input[@id="userEmail"]', 'test@test.com');

    // Use label click for Gender radio button
    await page.click('//label[text()="Male"]');

    await page.fill('//input[@id="userNumber"]', '0123456789');

    // Fix date selection by focusing first and then clicking
    await page.click('//input[@id="dateOfBirthInput"]');
    await page.fill('//input[@id="dateOfBirthInput"]', '15 Jan 1990');
    await page.press('//input[@id="dateOfBirthInput"]', 'Enter');

    await page.fill('//input[@id="subjectsInput"]', 'Playwright Assignment');

    // Click checkbox by using label for "Reading"
    await page.click('//label[@for="hobbies-checkbox-1"]');

    // Upload a picture
    await page.setInputFiles('//input[@id="uploadPicture"]', 'picture/team-gerimedica-2.jpg');

    await page.fill('//textarea[@id="currentAddress"]', 'Netherlands');

    // Select state and city
    await page.click('//div[@id="state"]');
    await page.click('//div[@id="state"]//div[text()="NCR"]');
    await page.click('//div[@id="city"]');
    await page.click('//div[@id="city"]//div[text()="Delhi"]');

    // Submit the form
    await page.click('//button[@id="submit"]');

    // Assertions to verify successful form submission
    const modalTitle = await page.locator('//div[@id="example-modal-sizes-title-lg"]').textContent();
    expect(modalTitle).toBe('Thanks for submitting the form');
});