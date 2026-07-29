export const WHATSAPP_E164 = "5548984655704";
export const EMAIL = "atendimento@metaemarketing.com.br";
export const INSTAGRAM = "https://instagram.com/metaemarketingdigital";

/** Monta o link do WhatsApp com a mensagem já preenchida. */
export function whatsapp(text: string): string {
  return `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(text)}`;
}

export const WA_VENDER_MAIS = whatsapp(
  "Oi Viviane! Vim pelo site e quero vender mais na minha loja."
);

export const WA_DIAGNOSTICO = whatsapp("Oi Viviane! Vim pelo site e quero um diagnóstico.");

export const WA_CONVERSAR = whatsapp("Oi Viviane! Vi o seu site e quero conversar.");
