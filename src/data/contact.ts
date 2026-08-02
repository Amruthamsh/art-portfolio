export const whatsappNumber = "9900493944";
export const phoneNumber = "+91 9900493944";
export const email = "amruthamsh13@gmail.com";

export function whatsappLink(message: string): string {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
