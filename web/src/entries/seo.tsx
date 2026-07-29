import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../styles/base.css";
import ServicoSeo from "../pages/ServicoSeo";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ServicoSeo />
  </StrictMode>
);
