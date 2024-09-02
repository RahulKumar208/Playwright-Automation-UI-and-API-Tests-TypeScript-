import { test, expect } from '@playwright/test';

test('API - Remove a Book from User Account', async ({ request }) => {
    // Replace with the actual token and user ID you have obtained
    const authToken = 'your_generated_token_here';  // Replace with the actual token value
    const userId = 'your_user_id_here';  // Replace with the actual user ID

    // Sending DELETE request to remove a book
    const removeBookResponse = await request.delete('/BookStore/v1/Book', {
        headers: {
            'Authorization': `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        },
        data: {
            userId: userId,
            isbn: '9781449325862'  // ISBN of the book to remove
        }
    });

    // Assertion to check if the book was removed successfully
    expect(removeBookResponse.status()).toBe(204);  // Successful removal, typically a 204 No Content
});