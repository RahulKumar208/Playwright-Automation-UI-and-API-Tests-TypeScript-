import { test, expect, request } from '@playwright/test';

test('API - Create User Account (Happy and Unhappy flow)', async ({ }) => {
    const context = await request.newContext();

    // Happy flow: Create a user account with unique username
    const uniqueUserName = `testUser_${Date.now()}`;
    const responseHappy = await context.post('https://demoqa.com/Account/v1/User', {
        data: {
            userName: uniqueUserName, // Use a unique username
            password: 'Test@1234'
        }
    });

    const responseBodyHappy = await responseHappy.json();
    console.log('Response for Happy flow:', responseBodyHappy);

    expect(responseHappy.status()).toBe(201);  // Successful creation
    expect(responseBodyHappy).toHaveProperty('userID');

    // Unhappy flow: Create a user account with the same username
    const responseUnhappy = await context.post('https://demoqa.com/Account/v1/User', {
        data: {
            userName: uniqueUserName, // Same username to trigger failure
            password: 'Test@1234'
        }
    });

    const responseBodyUnhappy = await responseUnhappy.json();
    console.log('Response for Unhappy flow:', responseBodyUnhappy);

    expect(responseUnhappy.status()).toBe(406);  // Not Acceptable
    expect(responseBodyUnhappy.message).toBe('User exists!');
});