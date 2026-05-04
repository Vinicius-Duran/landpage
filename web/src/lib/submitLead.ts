import { WHATSAPP_E164 } from "../constants";

export type LeadPayload = {
  nome: string;
  whatsapp: string;
  tipo: string;
  negocio: string;
};

function buildWhatsappMessage(p: LeadPayload): string {
  return `Olá! Sou ${p.nome}, do segmento ${p.negocio}. Solicitei um orçamento pelo site (${p.tipo}). Meu WhatsApp: ${p.whatsapp}.`;
}

function openWhatsappWithMessage(p: LeadPayload): void {
  const msg = buildWhatsappMessage(p);
  const url = `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

export async function submitLead(p: LeadPayload): Promise<void> {
  const apiUrl = import.meta.env.VITE_LEAD_API_URL?.trim();
  if (apiUrl) {
    try {
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(p),
      });
      if (!res.ok) throw new Error("lead_api_error");
    } catch {
      openWhatsappWithMessage(p);
      return;
    }
  }
  openWhatsappWithMessage(p);
}
