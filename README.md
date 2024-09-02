# QA Automation Assignment

## Project Overview

This project is a QA automation assignment for Gerimedica, focusing on automating both UI and API tests using Playwright and TypeScript. The project includes test cases to validate various functionalities on the DemoQA website, including:

- Creating a user account via API.
- Adding and removing books from a user's account via API.
- Automating UI tests to verify form submissions, editing table entries, checking for broken images, and tooltip verification.

## Technologies Used

- **Playwright**: For browser automation and API testing.
- **TypeScript**: To add type safety and better development practices.
- **Node.js**: JavaScript runtime for executing Playwright scripts.
- **HTML Reporter**: For generating detailed reports of the test runs.

## Project Structure

The project is organized into different folders to separate concerns:

- `src/e2e/ui`: Contains end-to-end UI tests.
- `src/e2e/api`: Contains API tests.
- `global-setup.ts`: A setup script that handles tasks such as token generation before running tests.
- `playwright.config.ts`: Configuration file for Playwright, specifying settings such as the test directory, timeout, and browser configurations.

## How to Set Up the Project

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/RahulKumar208/Playwright-Automation-UI-and-API-Tests-with-TypeScript.git
   cd Rahulkumat-GM-Assignment
2. Install Dependencies: Install Node.js dependencies required for the project using npm:  npm install
3. Install Playwright Browsers: Playwright requires specific browser versions to be installed:  npx playwright install
4. Configure Environment (Optional): Update any environment variables in .env or playwright.config.ts if necessary.

# Running the Tests
## Running All Tests
To run all the tests (both UI and API), execute the following command: npx playwright test

## Running Specific Tests
- To run only UI tests:
  npx playwright test src/e2e/ui
- To run only API tests:
  npx playwright test src/e2e/api

## Generating Reports
After running the tests, an HTML report will be generated automatically. You can open the report using: 
npx playwright show-report


# Key Features and Functionality
- User Account Creation (API Test): Automates the creation of a user account using the API. Handles both happy (successful creation) and unhappy (user already exists) flows.
- Token Management: Generates and stores authentication tokens required for adding and removing books via API.
- Add and Remove Books (API Test): Tests the functionality of adding a list of books to a user's account and removing a specific book.
- UI Automation: Verifies UI functionalities such as form submission, table row editing, image checking, and tooltip visibility using Playwright.




