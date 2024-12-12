// LoginPage.js
import { expect } from '@playwright/test';
import { CONFIG } from '../config';

class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.signInButton = page.locator('button[type="submit"]');
        this.webAppHeaderTitle = page.locator('h1', { hasText: 'Web Application' });
        
    }

    async navigate() {
        await this.page.goto(CONFIG.STANDARD_URL);
        await expect(this.page).toHaveURL(CONFIG.STANDARD_URL);
      }
    
      async performLogin(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.signInButton.click();
        await expect(this.page).toHaveURL(CONFIG.STANDARD_URL);
        await expect(this.webAppHeaderTitle).toBeVisible();
        await expect(this.webAppHeaderTitle).toHaveText('Web Application');
      }

}

export default LoginPage;



