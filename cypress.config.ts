import { defineConfig } from 'cypress';

// TODO: Get all data from process.env
const PORT = process.env.PORT || 3000;
const SITE_URL: string = `http://localhost:${PORT}`;
const API_URL: string = 'http://localhost:7000';

export default defineConfig({
  allowCypressEnv: false,
  env: {
    API_URL,
    auth: {
      username: 'user',
      password: 'user',
    },
  },
  e2e: {
    baseUrl: SITE_URL,
  },
});
