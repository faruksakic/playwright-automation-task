## Project Task Board Test Automation
Automated testing suite for a task board web application using Playwright.

## Project Overview
This project implements automated tests for a task board application, verifying task positions, statuses, and tags across different board sections (Web Application and Mobile Application). The implementation uses the Page Object Model pattern and data-driven testing approaches for maintainable and scalable test automation.

## Features

- Page Object Model: Organized test structure using page objects for better maintainability
- Data-Driven Testing: Configurable test data and scenarios
- Cross-Browser Testing: Support for Chromium, Firefox, and WebKit
- Detailed Reporting: HTML test reports with failure screenshots
- Configurable Settings: Environment configurations and timeouts

Project Structure

├── pages/
│   ├── loginPage.js       # Login page object
│   └── boards.js          # Boards page object
├── config/
│   └── config.js          # Configuration settings
├── tests/
│   └── tests.spec.js      # Test
├── testData.js            # Test data
└── playwright.config.js   # Playwright configuration


# Running E2E Tests on Local Mac

This guide explains how to run the end-to-end (e2e) tests for our project on a local Mac environment.

## Prerequisites

- Node.js (latest LTS version recommended)
- Git (to clone the repository)

## Setup

1. Clone the repository:
```
git clone [repository-url]
cd [project-directory]
```

2. Install dependencies:
```
npm install
```

3. Install Playwright browsers:
```
npx playwright install
```


## Running the Tests

To run the e2e tests:

1. Open a terminal and navigate to your project directory.

2. Run the following command:

```
npx playwright test
```

This command will run the tests specified in the `tests.spec.js` file located in the `Tests` folder.

To run tests in headed mode, run this command:

```
npx playwright test tests.spec.js --headed
```

To run tests in headed mode, using one specific browser, run this command:

```
npx playwright test tests.spec.js --headed --project=chromium (or --project=webkit for safari, or --project=firefox for firefox)
```

To run one specific tests from the test suite, run this command:

```
npx playwright test -g “Verify task 1-3 on webApp tab” --headed
```

By default, the tests will run on Chromium, WebKit, and Firefox as specified in the `playwright.config.js` file.

## Viewing Test Results

After running the tests, Playwright will provide a summary of the test results in the terminal. For a more detailed report, you can use the Playwright HTML reporter:

```
npx playwright show-report
```

This will open a detailed HTML report in your default browser.

## Test Cases

The automation suite covers the following scenarios:

- Web Application Board

Verify "Implement user authentication" task in "To Do" column with tags
Verify "Fix navigation bug" task in "To Do" column with tags
Verify "Design system updates" task in "In Progress" column with tags

- Mobile Application Board

Verify "Push notification system" task in "To Do" column with tags
Verify "Offline mode" task in "In Progress" column with tags
Verify "App icon design" task in "Done" column with tags

## Implementation Details

- Page Objects: Implements separation of concerns with dedicated page objects for login and board operations
- Config Management: Centralized configuration for URLs and timeouts
- Test Data: Externalized test data for maintainability
- Cross-browser Support: Tests run across multiple browsers for compatibility

## Troubleshooting

If you encounter any issues:

1. Ensure all dependencies are installed correctly.
2. Check that the `playwright.config.js` file is in the root directory and properly configured.

For more detailed information on Playwright and its features, refer to the [official Playwright documentation](https://playwright.dev/docs/intro).


## Contributing

- Fork the repository
- Create your feature branch
- Commit your changes
- Push to the branch
- Create a Pull Request

## Additional Resources

- Playwright Documentation
- Page Object Model Pattern
- Test Reports