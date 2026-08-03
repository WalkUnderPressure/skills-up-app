import { defineConfig } from 'cypress';

// TODO: Get all data from process.env
const APP_PORT = process.env.PORT || 3000;
const SITE_URL: string = `http://localhost:${APP_PORT}`;
const API_URL: string = 'http://localhost:7000';

export default defineConfig({
  allowCypressEnv: false,
  expose: {
    API_URL,
  },
  env: {
    auth: {
      username: 'user',
      password: 'user',
    },
  },
  e2e: {
    baseUrl: SITE_URL,
  },
  component: {
    specPattern: 'cypress/support/components/tests/**/*.cy.{ts,tsx}',
    indexHtmlFile: 'cypress/support/components/component-index.html',
    supportFile: 'cypress/support/components/setup.ts',
    devServer: {
      framework: 'react',
      bundler: 'webpack',
    },
  },
});
