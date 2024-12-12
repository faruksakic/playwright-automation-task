// @ts-check
import { defineConfig, devices } from '@playwright/test';

const config = {
  testDir: './tests',
  timeout: 60000,
  expect: {
    timeout: 30000,
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 1, // 1 retries on CI, 1 locally
  workers: process.env.CI ? 3 : undefined,
  reporter: 'html',
  use: {
    actionTimeout: 0,
    trace: 'retain-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
};

export default config;


