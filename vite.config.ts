/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true,
  },
  test: {
    globals: true,
    setupFiles: 'src/setupTests.ts',
    environment: 'happy-dom',
    coverage: {
      include: ['src/components/**/*.{ts,tsx}', 'src/helpers/**/*.{ts,tsx}'],
      // if you want to exclude some files
      exclude: [],
      reporter: ['html', 'text-summary', 'json'],
      thresholds: {
        functions: 50,
        lines: 50,
        branches: 50,
        statements: 50,
      },
    },
  },
})
