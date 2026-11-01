// Google tag IDs and conversion labels, in one place: moving the campaign to another Ads account is a change here only.

// Google Ads account 4329073078 (USD), where the campaign runs from November 2026, set up as its Google tag snippet
// says. The same Google tag (GT-5M3JQ5ST) also carries GA4 (G-HT2D4YWRTB): /gtag/js returns one container (~190 KiB)
// for either ID, and configuring this one sends page views to both. gtag.js is loaded with it.
const ADS_USD = "AW-18486884978";

// Google Ads account Evacuator-4you 7346815682 (EUR): its campaign runs for a week alongside the new one, then stops.
// Configuring it makes gtag.js fetch this account's container as a second script.
// TODO: once the EUR campaign is stopped, delete this ID and its conversions below; the page then loads one gtag.js.
const ADS_EUR = "AW-18482277256";

// Every tag the page configures; the first one is also the gtag.js loader.
export const GOOGLE_TAG_IDS = [ADS_USD, ADS_EUR];

// The gtag parameters of the conversions a click sends, one per account.
// tel: links count as calls; viber: and wa.me links as messages.
export const CONVERSIONS = {
  call: [
    // "Phone call lead": Google Ads counts it at 1 USD, once per ad click, whatever value the page sends.
    { send_to: `${ADS_USD}/mV96CNCxk7AdEPL0ne9E` },
    // "Click to call"
    { send_to: `${ADS_EUR}/CgOrCMCx4YsdEIjXhO1E`, value: 1.0, currency: "EUR" },
  ],
  message: [
    // TODO: label of a "Mesaj Viber/WhatsApp" conversion in the USD account. It has none yet, so until then the new
    // campaign does not count messages.
    // "Click to call", at a tenth of a call's value.
    { send_to: `${ADS_EUR}/CgOrCMCx4YsdEIjXhO1E`, value: 0.1, currency: "EUR" },
  ],
};
