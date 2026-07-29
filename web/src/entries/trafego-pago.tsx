import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../styles/base.css";
import ServicoTrafegoPago from "../pages/ServicoTrafegoPago";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ServicoTrafegoPago />
  </StrictMode>
);
