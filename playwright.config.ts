import { defineConfig, devices } from '@playwright/test';
import path from 'path';

export default defineConfig({
    // Directory where the tests are located
    testDir: './src',  // Adjusted based on your setup

    // Global timeout for each test case
    timeout: 60000,  // 60 seconds for each test

    // Expect assertions to use this timeout
    expect: {
        timeout: 5000,  // 5 seconds for expect assertions
    },

    // Configure the reporter to generate an HTML report
    reporter: 'html',

    // Global settings for the testing environment
    use: {
        // Specify the browser to use
        browserName: 'chromium',  // Using Chromium browser

        // Whether to run tests in headless mode
        headless: false,  // Running with head visible for debugging

        // Take a screenshot on failure
        screenshot: 'on',

        // Record video only on failure
        video: 'retain-on-failure',

        // Base URL for API testing
        baseURL: 'https://demoqa.com',  // Base URL for the API endpoints

        // Automatically store and reuse authentication state
        storageState: path.resolve(__dirname, 'storageState.json'),

        // Default timeout for each page action
        actionTimeout: 10000,  // 10 seconds for actions like click, fill, etc.

        // Configure context options for all tests
        contextOptions: {
            // Ignore HTTPS errors by default
            ignoreHTTPSErrors: true,
        },
    },

    // Define projects to run tests across different browsers or devices
    projects: [
        {
            name: 'Desktop Chromium',
            use: { ...devices['Desktop Chrome'] },
        },
    ],

    // Global setup for handling tasks like generating authentication tokens
    globalSetup: './global-setup.ts',

    // Path to store the test artifacts like videos, screenshots, etc.
    outputDir: './test-results/',

    // Retry a failed test once before reporting failure
    retries: 1,
});