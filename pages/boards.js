// boards.js
import { expect } from '@playwright/test';
import { CONFIG } from '../config';

class Boards {
    constructor(page) {
        this.page = page;
        this.mobileAppTab = page.locator('h2', { hasText: 'Mobile Application'});
        this.mobileAppHeaderTitle = page.locator('h1', { hasText: 'Mobile Application' });
    }

    async navigateToMobileApp() {
        await this.mobileAppTab.click();
        await expect(this.page).toHaveURL(CONFIG.STANDARD_URL);
        await expect(this.mobileAppHeaderTitle).toBeVisible();
    }

    async verifyTaskInColumn(taskName, columnName) {
        // Find the column by its header text
        const column = this.page.locator(`h2`, { hasText: columnName });
        // Find the task within that column's parent div
        const task = column.locator('..').locator(`h3`, { hasText: taskName });
        await expect(task).toBeVisible();
    }

    async verifyTaskTags(taskName, tags) {
        // Find the task card by its title
        const taskCard = this.page.locator(`h3`, { hasText: taskName }).locator('..');
        
        // Verify each tag
        for (const tag of tags) {
            const tagElement = taskCard.getByText(tag, { exact: true });
            await expect(tagElement).toBeVisible();
        }
    }
}

export default Boards;