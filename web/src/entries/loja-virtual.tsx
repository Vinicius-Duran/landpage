import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../styles/base.css";
import ServicoLojaVirtual from "../pages/ServicoLojaVirtual";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ServicoLojaVirtual />
  </StrictMode>
);
