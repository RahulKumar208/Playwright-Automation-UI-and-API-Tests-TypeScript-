import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './src',
    timeout: 60000,
    expect: {
        timeout: 5000
    },
    reporter: 'html',
    use: {
        browserName: 'chromium',
        headless: false,
        screenshot: 'on',
        video: 'retain-on-failure',
    },
});