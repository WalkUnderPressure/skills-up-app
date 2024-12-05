import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';

import { svgrRemoveSvgStrokeAndFillPlugin } from './config/build/loaders/buildSvgLoader';
import { BuildMode, ProjectType } from './config/build/types';

const PORT = Number(process.env.port ?? 3000);
const BUILD_MODE: BuildMode = 'development';
const API_URL: string = 'http://localhost:7000';
const PROJECT_TYPE: ProjectType = 'app';
const IS_DEV: boolean = BUILD_MODE === 'development';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    svgr({
      svgrOptions: {
        icon: true,
        plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
        svgoConfig: {
          plugins: [svgrRemoveSvgStrokeAndFillPlugin()],
        },
      },
      include: '**/*.svg',
    }),
    react(),
  ],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: PORT,
  },
  define: {
    __IS_DEV__: JSON.stringify(IS_DEV),
    __API_URL__: JSON.stringify(API_URL),
    __PROJECT__: JSON.stringify(PROJECT_TYPE),
  },
});
