export const SITE_URL = "https://evacuator-4you.md";
export const SITE_NAME = "Evacuator 4You";

export const PHONE_E164 = "+37360551000";
export const PHONE_LOCAL = "060 55 1000";

// Shown in the footer, the contacts block, the privacy policy and the JSON-LD. Empty fields stay hidden.
// TODO: the client's legal name, IDNO, base address and e-mail.
export const COMPANY = {
  legalName: "",
  idno: "",
  address: "",
  email: "",
};

// Only real reviews: the public profile they live on and its current rating. Shown in the contacts block once set.
// TODO: the Google Business (or Facebook) profile link, rating and number of reviews.
export const REVIEWS = {
  url: "",
  rating: "",
  count: "",
};

export const links = {
  tel: `tel:${PHONE_E164}`,
  viber: `viber://chat?number=${encodeURIComponent(PHONE_E164)}`,
  whatsapp: `https://wa.me/${PHONE_E164.slice(1)}`,
  facebook: "https://www.facebook.com/profile.php?id=61582050736921",
};
