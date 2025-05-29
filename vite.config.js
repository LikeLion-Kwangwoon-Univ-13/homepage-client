import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
const devConfig = (mode) =>
  mode === "development" && {
    // mkcert 필요 시 사용
  };
/* global process */
export default ({ mode }) => {
  // Load environment variables but only use what we need
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    ...devConfig(mode),
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: [
        { find: "@components", replacement: "/src/components" },
        { find: "@", replacement: "/src" },
      ],
    },
    build: {
      outDir: "dist",
    },
    define: {
      "process.env": process.env,
    },
  });
};
