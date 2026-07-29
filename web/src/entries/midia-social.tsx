import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../styles/base.css";
import ServicoMidiaSocial from "../pages/ServicoMidiaSocial";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ServicoMidiaSocial />
  </StrictMode>
);
