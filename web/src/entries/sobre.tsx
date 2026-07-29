import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../styles/base.css";
import Sobre from "../pages/Sobre";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Sobre />
  </StrictMode>
);
