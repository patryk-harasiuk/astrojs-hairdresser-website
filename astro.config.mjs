import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import { loadEnv } from 'vite';

import tailwind from '@astrojs/tailwind';

const env = loadEnv('', process.cwd(), 'STORYBLOK');

// https://astro.build/config
export default defineConfig({
  // Enable React to support React JSX components.
  integrations: [react(), tailwind()],
});
