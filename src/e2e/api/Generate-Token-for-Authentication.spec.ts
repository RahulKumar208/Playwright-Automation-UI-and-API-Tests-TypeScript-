import { test, expect, request } from '@playwright/test';

test('API - Generate Token', async ({ }) => {
    const context = await request.newContext();

    const tokenResponse = await context.post('https://demoqa.com/Account/v1/GenerateToken', {
        data: {
            userName: 'testUser',
            password: 'Test@1234'
        }
    });
    expect(tokenResponse.status()).toBe(200);  // Token generated successfully
    const tokenResponseBody = await tokenResponse.json();
    expect(tokenResponseBody).toHaveProperty('token');
    
    const authToken = tokenResponseBody.token;  // Store this token for further requests
});