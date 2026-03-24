import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react({
      // Garante que o React seja injetado automaticamente para evitar o erro "React is not defined"
      jsxRuntime: 'automatic',
    }),
    tailwindcss(),
  ],

  resolve: {
    alias: {
      // Atalhos para as tuas pastas de código
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },

  // Define onde estão os teus ficheiros de ambiente
  envDir: path.resolve(import.meta.dirname),

  // A pasta raiz do teu código front-end
  root: path.resolve(import.meta.dirname, "client"),

  // Onde estão as tuas imagens e ícones públicos
  publicDir: path.resolve(import.meta.dirname, "client", "public"),

  build: {
    // Pasta onde o site final será gerado para a Vercel ler
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
  },

  server: {
    host: true,
    port: 3000,
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});