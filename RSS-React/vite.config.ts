import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import istanbul from 'vite-plugin-istanbul';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    istanbul({
      cypress: true,
      requireEnv: false,
    }),
  ],
  server: {
    host: true,
    port: 3000,
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: './src/tests/setup.ts',
    coverage: {
      include: ['src/**/*.{ts,tsx}'],
      exclude: [
        'src/utils/*',
        'src/vite-env.d.ts',
        'src/main.tsx',
        'src/shared/models.ts',
        'src/tests',
        'src/App.tsx',
        'src/store',
        'src/services',
      ],
      reporter: ['text', 'json', 'html'],
      all: true,
      lines: 80,
      functions: 80,
      branches: 80,
      statements: 80,
    },
  },
});
