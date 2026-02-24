export const translations = {
  da: {
    nav: ["Info", "Galleri", "Om os"],
    eyebrow: "Aalborg siden 2005",
    hero_line1: "Klippe",
    hero_line2: "Huset",
    hero_sub: "Frisørsalon i hjertet af Aalborg",
    book_btn: "Book en tid",
    scroll_hint: "Rul ned",
    prices_label: "Priser",
    men: "Herrer",
    children: "Børn",
    hours_label: "Åbningstider",
    weekday: "Man – Fre",
    saturday: "Lørdag",
    contact_label: "Kontakt",
    address: "Niels Ebbesensgade 15",
    gallery_label: "Galleri",
    about_label: "Om os",
    owner_title: "Ejer & Frisør",
    about_text:
      "Mit navn er Hafizullah Mir og jeg er ejeren og frisøren af Klippe Huset i Aalborg. Jeg er uddannet frisør og startede ud med, at arbejde ved andre frisørsaloner, for at udvide mine kompetencer. I 2005 tog jeg så skridtet og blev selvstændig, hvilket jeg er utrolig glad for i dag.",
    about_text2:
      "Mine værdier ligger i at kunne levere en høj kvalitet som også er prisvenlig. Den bedste følelse for mig er, at kunne skabe et look som klienten ønsker.",
    reviews_label: "Anmeldelser",
    find_us_label: "Find os",
    footer_rights: "Alle rettigheder forbeholdes",
    gallery_title: "Vores",
    gallery_em: "arbejde",
    reviews_title: "Hvad kunder",
    reviews_em: "siger",
    map_title: "Find",
    map_em: "os",
  },
  en: {
    nav: ["Info", "Gallery", "About"],
    eyebrow: "Aalborg since 2005",
    hero_line1: "Klippe",
    hero_line2: "Huset",
    hero_sub: "Hair salon in the heart of Aalborg",
    book_btn: "Book appointment",
    scroll_hint: "Scroll",
    prices_label: "Prices",
    men: "Men",
    children: "Children",
    hours_label: "Opening hours",
    weekday: "Mon – Fri",
    saturday: "Saturday",
    contact_label: "Contact",
    address: "Niels Ebbesensgade 15",
    gallery_label: "Gallery",
    about_label: "About",
    owner_title: "Owner & Hairdresser",
    about_text:
      "My name is Hafizullah Mir and I am the owner and hairdresser of Klippe Huset in Aalborg. I started out working at other salons to expand my skills, and in 2005 I took the step and became self-employed.",
    about_text2:
      "My values lie in delivering high quality that is also affordable. The best feeling for me is creating a look the client truly wants.",
    reviews_label: "Reviews",
    find_us_label: "Find us",
    footer_rights: "All rights reserved",
    gallery_title: "Our",
    gallery_em: "work",
    reviews_title: "What clients",
    reviews_em: "say",
    map_title: "Find",
    map_em: "us",
  },
};

export const reviews = [
  {
    name: "Thomas H.",
    text: "Super god service og Hafiz klipper rigtig godt med både maskine og saks. Jeg har prøvet mange af Aalborg's frisører og dette er helt på højde med de bedste. De varmeste anbefalinger herfra.",
    stars: 5,
  },
  {
    name: "Anders M.",
    text: "Altid en fornøjelse at komme her. Har brugt Klippe Huset igennem flere år. Dygtige mennesker og altid en rar stemning.",
    stars: 5,
  },
  {
    name: "Lotte K.",
    text: "Virkelig god service! Jeg fik min søn på 4 år klippet og kvinden var meget tålmodig. Vi kommer helt sikkert igen.",
    stars: 5,
  },
  {
    name: "Mikkel B.",
    text: "Fin service. Kan næsten altid blive klippet uden lang ventetid — både med og uden tidsbestilling. Godt prisforhold.",
    stars: 4,
  },
];

export function getDailyReviews(offset = 0) {
  const dayIndex = Math.floor(Date.now() / 86400000) % reviews.length;
  return [0, 1, 2].map((i) => reviews[(dayIndex + offset + i) % reviews.length]);
}
