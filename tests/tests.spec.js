// tests.spec.js
import { test } from '@playwright/test';
import { testData } from '../testData';
import LoginPage from '../pages/loginPage';
import Boards from '../pages/boards';


test.describe('Verify tasks on Web Application', () => {

    test('Verify task 1-3 on webApp tab', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const boards = new Boards(page);
    
        await loginPage.navigate();
        await loginPage.performLogin(testData.valid_user.username, testData.valid_user.password);

        // Test Case 1
        await boards.verifyTaskInColumn('Implement user authentication', 'To Do');
        await boards.verifyTaskTags('Implement user authentication', ['Feature', 'High Priority']);

        // Test Case 2
        await boards.verifyTaskInColumn('Fix navigation bug', 'To Do');
        await boards.verifyTaskTags('Fix navigation bug', ['Bug']);

        // Test Case 3
        await boards.verifyTaskInColumn('Design system updates', 'In Progress');
        await boards.verifyTaskTags('Design system updates', ['Design']);

    });
});


test.describe('Verify tasks on Mobile Application', () => {

    test('Verify tasks 4-6 on mobileApp tab', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const boards = new Boards(page);
    
        await loginPage.navigate();
        await loginPage.performLogin(testData.valid_user.username, testData.valid_user.password);
        await boards.navigateToMobileApp();

        // Test Case 4
        await boards.verifyTaskInColumn('Push notification system', 'To Do');
        await boards.verifyTaskTags('Push notification system', ['Feature']);

        // Test Case 5
        await boards.verifyTaskInColumn('Offline mode', 'In Progress');
        await boards.verifyTaskTags('Offline mode', ['Feature', 'High Priority']);

        // Test Case 6
        await boards.verifyTaskInColumn('App icon design', 'Done');
        await boards.verifyTaskTags('App icon design', ['Design']);

    });

}); 