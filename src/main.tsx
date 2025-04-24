import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ColorModeProvider } from "./context/color-mode-context.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <ColorModeProvider>
    <App />
  </ColorModeProvider>
  // </StrictMode>
);
