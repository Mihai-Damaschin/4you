export const PHONE_E164 = "+37360551000";
export const PHONE_LOCAL = "060 551 000";

export const links = {
  tel: `tel:${PHONE_E164}`,
  viber: `viber://chat?number=${encodeURIComponent(PHONE_E164)}`,
  whatsapp: `https://wa.me/${PHONE_E164.slice(1)}`,
  facebook: "https://www.facebook.com/profile.php?id=61582050736921",
};
