import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import ServicoEmailMarketing from "./pages/ServicoEmailMarketing";
import ServicoLojaVirtual from "./pages/ServicoLojaVirtual";
import ServicoMidiaSocial from "./pages/ServicoMidiaSocial";
import ServicoSeo from "./pages/ServicoSeo";
import ServicoTrafegoPago from "./pages/ServicoTrafegoPago";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/servico-trafego-pago" element={<ServicoTrafegoPago />} />
        <Route path="/servico-email-marketing" element={<ServicoEmailMarketing />} />
        <Route path="/servico-loja-virtual" element={<ServicoLojaVirtual />} />
        <Route path="/servico-seo" element={<ServicoSeo />} />
        <Route path="/servico-midia-social" element={<ServicoMidiaSocial />} />
      </Routes>
    </BrowserRouter>
  );
}
