import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ShellApp from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ShellApp />
  </StrictMode>
);
