import { test, expect, request } from '@playwright/test';

test('API - Add Books to User Account', async ({ request }) => {
    // Assume `authToken` and `userId` have been retrieved from previous steps
    const authToken = 'your_generated_token_here';  // Replace with the actual token value
    const userId = 'your_user_id_here';  // Replace with the actual user ID

    // Add books to the user's account
    const addBooksResponse = await request.post('https://demoqa.com/BookStore/v1/Books', {
        headers: {
            'Authorization': `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        },
        data: {
            userId: userId,
            collectionOfIsbns: [
                { isbn: '9781449325862' },  // Example ISBN
                { isbn: '9781449331818' }   // Another Example ISBN
            ]
        }
    });
    expect(addBooksResponse.status()).toBe(201);  // Successful addition
    const addBooksResponseBody = await addBooksResponse.json();
    expect(addBooksResponseBody.books).toHaveLength(2);  // Ensure 2 books were added
});