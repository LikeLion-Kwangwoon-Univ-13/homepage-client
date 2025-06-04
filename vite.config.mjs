import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
const devConfig = (mode) =>
  mode === "development" && {
    // mkcert 필요 시 사용
  };

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const envWithProcessPrefix = Object.entries(env).reduce(
    (prev, [key, val]) => {
      return {
        ...prev,
        [`process.env.${key}`]: JSON.stringify(val)
      };
    },
    {}
  );

  return {
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
      ...envWithProcessPrefix
    },
  };
});
