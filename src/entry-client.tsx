import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const root = document.getElementById("root")!;
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// No build, o HTML já vem pré-renderizado (mais rápido): só "hidrata".
// Em desenvolvimento (npm run dev), renderiza do zero.
if (root.firstElementChild) hydrateRoot(root, app);
else createRoot(root).render(app);
