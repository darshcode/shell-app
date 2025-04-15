import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
//
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "shellApp",
      remotes: {
        authApp: "https://auth-mfe.onrender.com/assets/remoteEntry.js",
        nurseApp: "https://nurse-mfe.onrender.com/assets/remoteEntry.js",
        patientApp: "https://patient-mfe.onrender.com/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom", "@apollo/client"],
    }),
  ],

  preview: {
    host: "0.0.0.0",
    port: 3000,
    strictPort: true,
    allowedHosts: ["shell-app.onrender.com"], // update with your Render shell domain
  },

  build: {
    target: "esnext",
    outDir: "dist",
  },
});
