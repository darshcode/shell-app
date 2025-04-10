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
        authApp: "https://auth-app.onrender.com/assets/remoteEntry.js",
        patientApp: "https://patient-app.onrender.com/assets/remoteEntry.js",
        nurseApp: "https://nurse-app.onrender.com/assets/remoteEntry.js",
      },
      shared: [
        "react",
        "react-dom",
        "@apollo/client",
        "bootswatch",
        "bootstrap",
        "lucide-react",
      ],
    }),
  ],
  server: {
    host: "0.0.0.0",
    port: parseInt(process.env.PORT) || 3000,
  },
  preview: {
    host: "0.0.0.0",
    port: parseInt(process.env.PORT) || 3000,
    allowedHosts: ["shell-app.onrender.com"],
  },
  build: {
    target: "esnext",
    outDir: "dist",
  },
});
