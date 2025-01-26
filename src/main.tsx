import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="w-full h-dvh overflow-hidden flex justify-center items-center bg-dkgrey">
      <App />
    </div>
  </StrictMode>
);
