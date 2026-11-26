import { WHATSAPP, WHATSAPP_MENSAGEM } from "../config";

/** Monta o link https://wa.me/... com a mensagem já preenchida. */
export function whatsappLink(texto: string = WHATSAPP_MENSAGEM): string {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`;
}
