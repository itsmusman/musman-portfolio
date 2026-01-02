import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { imagetools } from "vite-imagetools";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), imagetools()],
  // Improve production chunking to avoid very large single bundles.
  // This splits common/node_modules libraries into named vendor chunks.
  build: {
    chunkSizeWarningLimit: 600, // raise threshold (KB) to reduce noisy warnings
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'vendor.react';
            if (id.includes('framer-motion')) return 'vendor.motion';
            if (id.includes('recharts')) return 'vendor.recharts';
            if (id.includes('lucide-react')) return 'vendor.icons';
            if (id.includes('@radix-ui') || id.includes('sonner') || id.includes('clsx')) return 'vendor.ui';
            return 'vendor';
          }
        }
      }
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
