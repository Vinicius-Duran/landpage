import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../styles/base.css";
import ServicoEmailMarketing from "../pages/ServicoEmailMarketing";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ServicoEmailMarketing />
  </StrictMode>
);
