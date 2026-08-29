/* ============================================================
   TRINITY CAR — assets/data.js
   Agency info + fleet data (no i18n, no rendering logic here)
   ============================================================ */

const AGENCY = {
  name: "Trinity Car",
  tagline: "Location voiture Oujda",
  phone: "0672855346",
  phoneDisplay: "06 72 85 53 46",
  whatsapp: "212672855346",
  email: "contact@trinitycar.ma", // PLACEHOLDER — email not provided, replace with real address
  address: {
    fr: "1er Étage, Appt 14, Rue Youssef Ben Tachafin, Angle Boulevard Allal Ben Abdellah, Oujda",
    ar: "الطابق 1، شقة 14، زنقة يوسف بن تاشفين، زاوية شارع علال بن عبد الله، وجدة",
    en: "1st Floor, Apt 14, Youssef Ben Tachafin St, corner Boulevard Allal Ben Abdellah, Oujda"
  },
  cities: { fr: "Oujda et alentours", ar: "وجدة والمناطق المجاورة", en: "Oujda and surrounding areas" },
  rating: "4.7",
  reviews: "65+",
  social: {
    facebook: "#", // PLACEHOLDER — exact Facebook URL not provided
    instagram: "https://www.instagram.com/trinitycar1",
    whatsapp: "https://wa.me/212672855346"
  },
  mapUrl: "https://maps.google.com/?q=Oujda+Trinity+Car", // PLACEHOLDER — exact map pin/coordinates not provided
  // ---- Rental conditions & policies ----
  minAge: 25,
  deposit: 10000,
  kmPerDay: 250,
  payments: { fr: "TPE (carte bancaire) ou espèces", ar: "البطاقة البنكية (TPE) أو نقدا", en: "Card (TPE) or cash" },
  hours: { fr: "7j/7, de 10h à 18h", ar: "7/7 أيام، من 10 صباحا إلى 18 مساء", en: "7 days a week, 10am to 6pm" },
  discountLongStay: { fr: "Remise à partir de 5 jours de location", ar: "تخفيض ابتداء من 5 أيام كراء", en: "Discount from 5 rental days" },
  weeklyPromo: { fr: "7 jours de location = 1 jour offert", ar: "7 أيام كراء = يوم واحد فبلاش", en: "7 rental days = 1 day free" },
  seasonalNote: { fr: "Tarifs plus élevés en haute saison (été)", ar: "الأثمنة كتزاد شوية ف الصيف", en: "Higher rates during summer high season" }
};

/* ---------------- FLEET DATA ----------------
   Real reference photos sourced from Wikimedia Commons (free-license media).
   Colors/trims are matched as closely as possible to what was described;
   exact color match is not guaranteed for every unit. */
const CARS = [
  {
    id: "accent-diesel-manuelle",
    name: "Hyundai Accent",
    trim: { fr: "Diesel Manuelle", ar: "ديزل يدوية", en: "Diesel Manual" },
    year: 2023,
    pricePerDay: 330,
    gearbox: { fr: "Manuelle", ar: "يدوية", en: "Manual" },
    seats: 5,
    ac: true,
    fuel: { fr: "Diesel", ar: "ديزل", en: "Diesel" },
    category: "economy",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Hyundai_Accent_(RB)_in_Brunei.jpg?width=700"
  },
  {
    id: "accent-diesel-auto-blanche",
    name: "Hyundai Accent",
    trim: { fr: "Diesel Automatique 2023, Blanche", ar: "ديزل أوتوماتيكية 2023، بيضاء", en: "Diesel Automatic 2023, White" },
    year: 2023,
    pricePerDay: 330,
    gearbox: { fr: "Automatique", ar: "أوتوماتيكية", en: "Automatic" },
    seats: 5,
    ac: true,
    fuel: { fr: "Diesel", ar: "ديزل", en: "Diesel" },
    category: "economy",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Hyundai_Accent_(RB)_in_Brunei.jpg?width=700"
  },
  {
    id: "accent-diesel-auto-noire",
    name: "Hyundai Accent",
    trim: { fr: "Diesel Automatique, Noire", ar: "ديزل أوتوماتيكية، سوداء", en: "Diesel Automatic, Black" },
    year: 2023,
    pricePerDay: 330,
    gearbox: { fr: "Automatique", ar: "أوتوماتيكية", en: "Automatic" },
    seats: 5,
    ac: true,
    fuel: { fr: "Diesel", ar: "ديزل", en: "Diesel" },
    category: "economy",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Hyundai_Accent_(RB)_in_Brunei.jpg?width=700"
  },
  {
    id: "accent-essence-auto-marron",
    name: "Hyundai Accent",
    trim: { fr: "Essence Automatique 2025, Marron", ar: "بنزين أوتوماتيكية 2025، بني", en: "Petrol Automatic 2025, Brown" },
    year: 2025,
    pricePerDay: 350,
    gearbox: { fr: "Automatique", ar: "أوتوماتيكية", en: "Automatic" },
    seats: 5,
    ac: true,
    fuel: { fr: "Essence", ar: "بنزين", en: "Petrol" },
    category: "economy",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Hyundai_Accent_(RB)_in_Brunei.jpg?width=700"
  },
  {
    id: "opel-mokka-blanche",
    name: "Opel Mokka",
    trim: { fr: "Essence Automatique, Blanche", ar: "بنزين أوتوماتيكية، بيضاء", en: "Petrol Automatic, White" },
    year: 2023,
    pricePerDay: 400,
    gearbox: { fr: "Automatique", ar: "أوتوماتيكية", en: "Automatic" },
    seats: 5,
    ac: true,
    fuel: { fr: "Essence", ar: "بنزين", en: "Petrol" },
    category: "confort",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Opel_Mokka_Elegance_2023_(53460225261).jpg?width=700"
  },
  {
    id: "opel-corsa-bleue",
    name: "Opel Corsa",
    trim: { fr: "Essence Manuelle, Bleue", ar: "بنزين يدوية، زرقاء", en: "Petrol Manual, Blue" },
    year: 2020,
    pricePerDay: 300,
    gearbox: { fr: "Manuelle", ar: "يدوية", en: "Manual" },
    seats: 5,
    ac: true,
    fuel: { fr: "Essence", ar: "بنزين", en: "Petrol" },
    category: "economy",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/2020_Opel_Corsa_F.jpg?width=700"
  },
  {
    id: "vw-golf-8",
    name: "Volkswagen Golf 8",
    trim: { fr: "Automatique", ar: "أوتوماتيكية", en: "Automatic" },
    year: 2023,
    pricePerDay: 900,
    gearbox: { fr: "Automatique", ar: "أوتوماتيكية", en: "Automatic" },
    seats: 5,
    ac: true,
    fuel: { fr: "Essence", ar: "بنزين", en: "Petrol" },
    category: "luxe",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Volkswagen_Golf_VIII_Facelift_IMG_8947.jpg?width=700"
  }
];

