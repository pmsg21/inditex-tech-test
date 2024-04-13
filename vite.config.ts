import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import type { UserConfig } from 'vite';

export default ({ command }: { command: 'build' | 'serve' }): UserConfig => {
  try {
    if (command === 'build') {
      return defineConfig({
        plugins: [reactRefresh()],
        build: {
          minify: true,
          sourcemap: false,
          assetsInlineLimit: 4096, // Enables asset optimization
          outDir: 'dist', // Specifies the output directory for generated assets
        },
      });
    }

    return defineConfig({
      plugins: [reactRefresh()],
      build: {
        minify: false,
        sourcemap: true,
      },
      server: {
        port: 3000,
      },
    });
  } catch (error) {
    console.error('Error in configuration:', error);
    throw new Error('Invalid configuration. See logs for more details.');
  }
};
