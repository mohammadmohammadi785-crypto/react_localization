import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "next-themes";
import i18n from "./i18n/i18n.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider enableSystem attribute="class">
      <App />
    </ThemeProvider>
  </StrictMode>,
);
