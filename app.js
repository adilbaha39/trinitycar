/* ============================================================
   TRINITY CAR — assets/app.js
   Shared data, i18n, navbar/footer injection, booking logic
   ============================================================ */

/* ---------------- AGENCY DATA ---------------- */
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
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Hyundai_Accent_(RB)_in_Brunei.jpg"
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
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Hyundai_Accent_(RB)_in_Brunei.jpg"
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
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Hyundai_Accent_(RB)_in_Brunei.jpg"
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
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Hyundai_Accent_(RB)_in_Brunei.jpg"
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
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Opel_Mokka_Elegance_2023_(53460225261).jpg"
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
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/2020_Opel_Corsa_F.jpg"
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
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Volkswagen_Golf_VIII_Facelift_IMG_8947.jpg"
  }
];

/* ---------------- I18N ---------------- */
const I18N = {
  fr: {
    dir: "ltr", htmlLang: "fr",
    nav: { home: "Accueil", fleet: "Notre flotte", agency: "À propos", contact: "Contact", reserve: "Réserver sur WhatsApp" },
    hero: {
      eyebrow: "LOCATION VOITURE À OUJDA",
      title1: "Votre trajet,", title2: "en toute sérénité.",
      sub: "Des véhicules récents, entretenus et prêts pour la route. Au meilleur prix.",
      cta: "Réserver sur WhatsApp", ctaSub: "Réponse rapide 24/7",
      f1t: "Meilleur prix", f1s: "Garanti", f2t: "Réponse rapide", f2s: "7j/7", f3t: "Service fiable", f3s: "Clients satisfaits"
    },
    fleetSection: { title: "NOTRE FLOTTE", sub: "Choisissez la voiture qui vous convient.", viewAll: "Voir toute la flotte", perDay: "DH / jour", choose: "Choisir" },
    trust: { insurance: "Assurance incluse", insuranceSub: "Tous nos véhicules sont assurés pour votre sécurité.",
      delivery: "Livraison aéroport", deliverySub: "Livraison et récupération à l'aéroport d'Oujda.",
      service: "Ouvert 7j/7", serviceSub: "Du lundi au dimanche, de 10h à 18h.",
      clients: "Clients satisfaits", clientsSub: "avis Google" },
    how: { title: "COMMENT ÇA MARCHE ?", s1t: "Choisissez votre voiture", s1s: "Parcourez notre flotte et sélectionnez le véhicule qui vous convient.",
      s2t: "Sélectionnez vos dates", s2s: "Indiquez vos dates de début et de fin de location selon vos besoins.",
      s3t: "Réservez sur WhatsApp", s3s: "Confirmez rapidement votre réservation via WhatsApp. Simple et rapide !",
      cta: "Réserver maintenant", ctaSub: "sur WhatsApp" },
    infoStrip: { cities: "Villes couvertes", conditions: "Conditions de location", c1: "Permis B valide - 25 ans minimum", c2: "Pièce d'identité", c3: "Caution de 10 000 DH", c4: "250 km/jour inclus", c5: "Paiement : TPE (carte) ou espèces",
      hours: "Horaires", hoursVal: "7j/7, de 10h à 18h", contact: "Contact rapide",
      promo1: "Remise à partir de 5 jours de location", promo2: "7 jours de location = 1 jour offert", seasonal: "Tarifs plus élevés en haute saison (été)" },
    footer: { about: "Votre partenaire de confiance pour la location de voitures à Oujda.", links: "Liens rapides", services: "Nos services",
      s1: "Location courte durée", s2: "Location longue durée", s3: "Livraison aéroport", s4: "Chauffeur sur demande", s5: "Assistance 24/7",
      contactUs: "Contactez-nous", map: "Voir sur la carte", rights: "Tous droits réservés." },
    fleetPage: { title: "Notre flotte", sub: "Découvrez tous nos véhicules disponibles à la location.", filterAll: "Toutes", filterAuto: "Automatique", filterManual: "Manuelle" },
    agencyPage: { title: "À propos de Trinity Car", sub: "Votre partenaire de confiance pour la location de voitures à Oujda.",
      storyTitle: "Notre histoire", story: "Trinity Car accompagne les habitants et visiteurs d'Oujda avec une flotte récente, entretenue et disponible à tout moment. Notre priorité : un service simple, rapide et transparent, du premier message WhatsApp jusqu'au retour du véhicule.",
      valuesTitle: "Nos valeurs", v1: "Transparence sur les prix, sans frais cachés.", v2: "Véhicules récents, révisés et assurés.", v3: "Disponibilité 24h/24 et 7j/7.",
      addressTitle: "Notre adresse", hoursTitle: "Nos horaires" },
    reservationPage: { title: "Réservez votre voiture", sub: "Simple. Rapide. Directement sur WhatsApp.",
      step1: "Voiture", step2: "Dates", step3: "Confirmation",
      chooseTitle: "1. Choisissez votre voiture",
      formTitle: "2. Vos informations",
      name: "Nom complet", namePh: "Votre nom", phone: "Téléphone", phonePh: "06 XX XX XX XX",
      start: "Date de début", end: "Date de fin", pickup: "Lieu de récupération", pickupPh: "Ex : Aéroport d'Oujda, Agence...",
      message: "Message (optionnel)", messagePh: "Précisions supplémentaires...",
      summary: "Votre réservation", period: "Période", days: "jours", day: "jour", from: "Du", to: "Au", pricePerDayLbl: "Prix par jour", total: "Total",
      insurance: "Assurance incluse", delivery: "Livraison aéroport", service: "250 km/jour inclus", deposit: "Caution : 10 000 DH", minAgeLbl: "Âge minimum : 25 ans", paymentLbl: "Paiement : TPE ou espèces",
      submit: "Réserver sur WhatsApp", submitSub: "Confirmation rapide", noPreauth: "Aucune pré-autorisation de paiement",
      errRequired: "Ce champ est obligatoire.", errPhone: "Numéro de téléphone invalide.", errDates: "La date de fin doit être après la date de début.",
      selectCar: "Sélectionnez une voiture ci-dessus pour continuer.", copied: "Message copié ! Collez-le dans WhatsApp.", copyFail: "Impossible d'ouvrir WhatsApp automatiquement."
    },
    waMsg: (c, d) => `Bonjour Trinity Car,%0A%0AJe souhaite réserver :%0A🚗 Véhicule : ${c.name} (${c.year})%0A📅 Du : ${d.start}%0A📅 Au : ${d.end}%0A📍 Récupération : ${d.pickup}%0A👤 Nom : ${d.name}%0A📞 Téléphone : ${d.phone}${d.message ? `%0A📝 Message : ${d.message}` : ""}%0A%0AMerci de me confirmer la disponibilité.`
  },
  ar: {
    dir: "rtl", htmlLang: "ar",
    nav: { home: "الرئيسية", fleet: "أسطولنا", agency: "من نحن", contact: "اتصل بنا", reserve: "احجز عبر واتساب" },
    hero: {
      eyebrow: "كراء السيارات بوجدة",
      title1: "رحلتك،", title2: "فكل راحة وأمان.",
      sub: "سيارات حديثة، فمراقبة دائمة وجاهزة للطريق. بأحسن ثمن.",
      cta: "احجز عبر واتساب", ctaSub: "جواب سريع 24/7",
      f1t: "أحسن ثمن", f1s: "مضمون", f2t: "جواب سريع", f2s: "7/7", f3t: "خدمة موثوقة", f3s: "زبناء راضيين"
    },
    fleetSection: { title: "أسطولنا", sub: "اختار السيارة اللي كتناسبك.", viewAll: "شوف كل الأسطول", perDay: "درهم / اليوم", choose: "اختار" },
    trust: { insurance: "التأمين متضمن", insuranceSub: "جميع سياراتنا مؤمنة لسلامتك.",
      delivery: "التوصيل للمطار", deliverySub: "التوصيل والاسترجاع من مطار وجدة.",
      service: "مفتوحين 7/7", serviceSub: "من الاثنين للأحد، من 10 صباحا حتى 18 مساء.",
      clients: "زبناء راضيين", clientsSub: "تقييم من گوگل" },
    how: { title: "كيفاش كتخدم؟", s1t: "اختار سيارتك", s1s: "تصفح أسطولنا واختار السيارة اللي كتلايم حوايجك.",
      s2t: "حدد التواريخ ديالك", s2s: "عطي تاريخ البداية والنهاية ديال الكراء.",
      s3t: "احجز عبر واتساب", s3s: "أكد الحجز ديالك بسرعة عبر واتساب. سهل وسريع!",
      cta: "احجز دابا", ctaSub: "عبر واتساب" },
    infoStrip: { cities: "المدن المغطاة", conditions: "شروط الكراء", c1: "رخصة السياقة صنف ب صالحة - 25 سنة كحد أدنى", c2: "بطاقة التعريف الوطنية", c3: "تأمين 10.000 درهم", c4: "250 كيلومتر فاليوم متضمنين", c5: "الأداء: البطاقة البنكية (TPE) أو نقدا",
      hours: "أوقات العمل", hoursVal: "7/7 أيام، من 10 صباحا إلى 18 مساء", contact: "اتصال سريع",
      promo1: "تخفيض ابتداء من 5 أيام كراء", promo2: "7 أيام كراء = يوم واحد فبلاش", seasonal: "الأثمنة كتزاد شوية ف الصيف" },
    footer: { about: "الشريك الموثوق ديالك لكراء السيارات بوجدة.", links: "روابط سريعة", services: "خدماتنا",
      s1: "كراء قصير المدى", s2: "كراء طويل المدى", s3: "التوصيل للمطار", s4: "سائق عند الطلب", s5: "مساعدة 24/7",
      contactUs: "اتصل بنا", map: "شوف فالخريطة", rights: "جميع الحقوق محفوظة." },
    fleetPage: { title: "أسطولنا", sub: "اكتشف جميع السيارات المتوفرة للكراء.", filterAll: "الكل", filterAuto: "أوتوماتيكية", filterManual: "يدوية" },
    agencyPage: { title: "من نحن — Trinity Car", sub: "الشريك الموثوق ديالك لكراء السيارات بوجدة.",
      storyTitle: "قصتنا", story: "Trinity Car كترافق ساكنة وزوار وجدة بأسطول حديث، فمراقبة دائمة ومتوفر فكل وقت. الأولوية ديالنا: خدمة بسيطة، سريعة وواضحة، من أول رسالة فواتساب حتى رجوع السيارة.",
      valuesTitle: "قيمنا", v1: "شفافية فالأثمنة، بلا مصاريف خفية.", v2: "سيارات حديثة، مراقبة ومؤمنة.", v3: "متوفرين 24 ساعة على 24 و7 أيام على 7.",
      addressTitle: "العنوان ديالنا", hoursTitle: "أوقات العمل" },
    reservationPage: { title: "احجز السيارة ديالك", sub: "بسيط. سريع. مباشرة عبر واتساب.",
      step1: "السيارة", step2: "التواريخ", step3: "التأكيد",
      chooseTitle: "1. اختار السيارة ديالك",
      formTitle: "2. المعلومات ديالك",
      name: "الاسم الكامل", namePh: "الاسم ديالك", phone: "الهاتف", phonePh: "06 XX XX XX XX",
      start: "تاريخ البداية", end: "تاريخ النهاية", pickup: "مكان الاسترجاع", pickupPh: "مثلا: مطار وجدة، الوكالة...",
      message: "رسالة (اختياري)", messagePh: "تفاصيل إضافية...",
      summary: "الحجز ديالك", period: "المدة", days: "أيام", day: "يوم", from: "من", to: "إلى", pricePerDayLbl: "الثمن لليوم", total: "المجموع",
      insurance: "التأمين متضمن", delivery: "التوصيل للمطار", service: "250 كيلومتر فاليوم", deposit: "التأمين: 10.000 درهم", minAgeLbl: "السن الأدنى: 25 سنة", paymentLbl: "الأداء: TPE أو نقدا",
      submit: "احجز عبر واتساب", submitSub: "تأكيد سريع", noPreauth: "بلا أي تفويض مسبق للأداء",
      errRequired: "هاد الخانة واجبة.", errPhone: "رقم الهاتف ماشي صحيح.", errDates: "تاريخ النهاية خاصو يكون بعد تاريخ البداية.",
      selectCar: "اختار سيارة من فوق باش تكمل.", copied: "الرسالة تنسخات! لصقها فواتساب.", copyFail: "ما قدرناش نحلو واتساب أوتوماتيكيا."
    },
    waMsg: (c, d) => `السلام عليكم Trinity Car،%0A%0Aبغيت نحجز:%0A🚗 السيارة: ${c.name} (${c.year})%0A📅 من: ${d.start}%0A📅 إلى: ${d.end}%0A📍 الاسترجاع: ${d.pickup}%0A👤 الاسم: ${d.name}%0A📞 الهاتف: ${d.phone}${d.message ? `%0A📝 رسالة: ${d.message}` : ""}%0A%0Aشكرا تأكدو ليا الطوفر.`
  },
  en: {
    dir: "ltr", htmlLang: "en",
    nav: { home: "Home", fleet: "Our fleet", agency: "About", contact: "Contact", reserve: "Book on WhatsApp" },
    hero: {
      eyebrow: "CAR RENTAL IN OUJDA",
      title1: "Your journey,", title2: "with total peace of mind.",
      sub: "Recent, well-maintained vehicles ready for the road. At the best price.",
      cta: "Book on WhatsApp", ctaSub: "Fast reply 24/7",
      f1t: "Best price", f1s: "Guaranteed", f2t: "Fast reply", f2s: "7 days a week", f3t: "Reliable service", f3s: "Happy customers"
    },
    fleetSection: { title: "OUR FLEET", sub: "Choose the car that suits you.", viewAll: "View full fleet", perDay: "DH / day", choose: "Choose" },
    trust: { insurance: "Insurance included", insuranceSub: "All our vehicles are insured for your safety.",
      delivery: "Airport delivery", deliverySub: "Delivery and pick-up at Oujda airport.",
      service: "Open 7 days a week", serviceSub: "Monday to Sunday, 10am to 6pm.",
      clients: "Happy customers", clientsSub: "Google reviews" },
    how: { title: "HOW IT WORKS", s1t: "Choose your car", s1s: "Browse our fleet and select the vehicle that suits you.",
      s2t: "Select your dates", s2s: "Enter your start and end rental dates.",
      s3t: "Book on WhatsApp", s3s: "Quickly confirm your booking via WhatsApp. Simple and fast!",
      cta: "Book now", ctaSub: "on WhatsApp" },
    infoStrip: { cities: "Cities covered", conditions: "Rental conditions", c1: "Valid category B license - 25 years minimum", c2: "ID document", c3: "10,000 DH deposit", c4: "250 km/day included", c5: "Payment: card (TPE) or cash",
      hours: "Opening hours", hoursVal: "7 days a week, 10am–6pm", contact: "Quick contact",
      promo1: "Discount from 5 rental days", promo2: "7 rental days = 1 day free", seasonal: "Higher rates during summer high season" },
    footer: { about: "Your trusted partner for car rental in Oujda.", links: "Quick links", services: "Our services",
      s1: "Short-term rental", s2: "Long-term rental", s3: "Airport delivery", s4: "Driver on request", s5: "24/7 assistance",
      contactUs: "Contact us", map: "View on map", rights: "All rights reserved." },
    fleetPage: { title: "Our fleet", sub: "Discover all our vehicles available for rent.", filterAll: "All", filterAuto: "Automatic", filterManual: "Manual" },
    agencyPage: { title: "About Trinity Car", sub: "Your trusted partner for car rental in Oujda.",
      storyTitle: "Our story", story: "Trinity Car supports residents and visitors of Oujda with a recent fleet, well maintained and available at all times. Our priority: a simple, fast and transparent service, from the first WhatsApp message to the return of the vehicle.",
      valuesTitle: "Our values", v1: "Price transparency, no hidden fees.", v2: "Recent, serviced and insured vehicles.", v3: "Available 24/7.",
      addressTitle: "Our address", hoursTitle: "Our hours" },
    reservationPage: { title: "Book your car", sub: "Simple. Fast. Directly on WhatsApp.",
      step1: "Car", step2: "Dates", step3: "Confirmation",
      chooseTitle: "1. Choose your car",
      formTitle: "2. Your information",
      name: "Full name", namePh: "Your name", phone: "Phone", phonePh: "06 XX XX XX XX",
      start: "Start date", end: "End date", pickup: "Pick-up location", pickupPh: "E.g. Oujda Airport, Agency...",
      message: "Message (optional)", messagePh: "Additional details...",
      summary: "Your booking", period: "Period", days: "days", day: "day", from: "From", to: "To", pricePerDayLbl: "Price per day", total: "Total",
      insurance: "Insurance included", delivery: "Airport delivery", service: "250 km/day included", deposit: "Deposit: 10,000 DH", minAgeLbl: "Minimum age: 25", paymentLbl: "Payment: card (TPE) or cash",
      submit: "Book on WhatsApp", submitSub: "Fast confirmation", noPreauth: "No payment pre-authorization",
      errRequired: "This field is required.", errPhone: "Invalid phone number.", errDates: "End date must be after start date.",
      selectCar: "Select a car above to continue.", copied: "Message copied! Paste it into WhatsApp.", copyFail: "Could not open WhatsApp automatically."
    },
    waMsg: (c, d) => `Hello Trinity Car,%0A%0AI would like to book:%0A🚗 Vehicle: ${c.name} (${c.year})%0A📅 From: ${d.start}%0A📅 To: ${d.end}%0A📍 Pick-up: ${d.pickup}%0A👤 Name: ${d.name}%0A📞 Phone: ${d.phone}${d.message ? `%0A📝 Message: ${d.message}` : ""}%0A%0AThank you for confirming availability.`
  }
};

/* ---------------- LANGUAGE STATE ---------------- */
function detectLang() {
  const saved = localStorage.getItem("tc_lang");
  if (saved && I18N[saved]) return saved;
  const nav = (navigator.language || "fr").slice(0, 2).toLowerCase();
  if (I18N[nav]) return nav;
  return "fr";
}

let currentLang = detectLang();

function t() { return I18N[currentLang]; }

function setLang(lang) {
  if (!I18N[lang]) return;
  currentLang = lang;
  localStorage.setItem("tc_lang", lang);
  document.documentElement.lang = I18N[lang].htmlLang;
  document.documentElement.dir = I18N[lang].dir;
  document.body.classList.toggle("font-arabic", lang === "ar");
  renderNavbar();
  renderFooter();
  if (typeof onLangChange === "function") onLangChange();
}

/* ---------------- NAVBAR ---------------- */
function renderNavbar() {
  const el = document.getElementById("navbar");
  if (!el) return;
  const T = t();
  const path = window.location.pathname;
  const page = path.substring(path.lastIndexOf("/") + 1) || "index.html";
  const isActive = (p) => (page === p || (p === "index.html" && page === "")) ? "text-blue-600" : "text-slate-700 hover:text-blue-600";
  const underline = (p) => (page === p || (p === "index.html" && page === "")) ? '<span class="block h-0.5 bg-blue-600 mt-1 rounded-full"></span>' : "";

  el.innerHTML = `
  <header class="sticky top-0 z-50 bg-[#F3F1EC]/90 backdrop-blur border-b border-black/5">
    <div class="max-w-7xl mx-auto px-5 md:px-8 h-20 flex items-center justify-between">
      <a href="index.html" class="flex flex-col leading-none group" aria-label="Trinity Car - ${T.nav.home}">
        <svg width="150" height="18" viewBox="0 0 150 18" fill="none" class="mb-1 opacity-70"><path d="M2 15c8-10 20-13 35-10s25 8 40 3 35-6 45 2" stroke="#1E5FBF" stroke-width="1.2" fill="none"/></svg>
        <span class="text-2xl font-black tracking-tight text-slate-900">TRINITY<span class="text-blue-600">CAR</span></span>
        <span class="text-[9px] tracking-[0.25em] text-slate-400 font-medium">LOCATION VOITURE OUJDA</span>
      </a>
      <nav class="hidden md:flex items-center gap-9 text-[15px] font-medium">
        <a href="index.html" class="${isActive('index.html')} transition-colors">${T.nav.home}${underline('index.html')}</a>
        <a href="flotte.html" class="${isActive('flotte.html')} transition-colors">${T.nav.fleet}${underline('flotte.html')}</a>
        <a href="agence.html" class="${isActive('agence.html')} transition-colors">${T.nav.agency}${underline('agence.html')}</a>
        <a href="reservation.html" class="${isActive('reservation.html')} transition-colors">${T.nav.contact}${underline('reservation.html')}</a>
      </nav>
      <div class="flex items-center gap-3">
        <div class="hidden sm:flex items-center gap-1 text-xs font-semibold text-slate-500 border border-slate-300 rounded-full p-1">
          ${["fr","ar","en"].map(l => `<button data-lang="${l}" class="lang-btn px-2.5 py-1 rounded-full transition-colors ${currentLang===l ? 'bg-blue-600 text-white' : 'hover:bg-slate-200'}">${l.toUpperCase()}</button>`).join("")}
        </div>
        <a href="reservation.html" class="hidden md:inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-3 rounded-xl transition-colors magnetic-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l5.06-1.33A9.94 9.94 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm5.2 14.2c-.22.62-1.28 1.18-1.77 1.25-.45.07-1.02.1-1.65-.1-.38-.12-.87-.28-1.5-.55-2.63-1.14-4.35-3.8-4.48-3.98-.13-.17-1.07-1.42-1.07-2.71 0-1.29.68-1.92.92-2.18.24-.26.53-.32.7-.32.18 0 .35 0 .5.01.16.01.38-.06.6.46.22.53.75 1.83.82 1.96.07.14.11.3.02.48-.09.18-.14.29-.27.44-.14.16-.29.35-.41.47-.14.14-.28.29-.12.57.16.27.71 1.18 1.53 1.91 1.05.94 1.94 1.23 2.21 1.37.27.14.43.12.59-.07.16-.2.68-.79.86-1.06.18-.27.36-.22.6-.13.25.09 1.57.74 1.84.88.27.14.45.2.51.32.07.12.07.68-.15 1.3z"/></svg>
          ${T.nav.reserve}
        </a>
        <button id="hamburger" class="md:hidden p-2" aria-label="Menu">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </div>
    </div>
    <div id="mobileMenu" class="md:hidden hidden bg-[#F3F1EC] border-t border-black/5 px-5 py-4 space-y-3">
      <a href="index.html" class="block font-medium ${isActive('index.html')}">${T.nav.home}</a>
      <a href="flotte.html" class="block font-medium ${isActive('flotte.html')}">${T.nav.fleet}</a>
      <a href="agence.html" class="block font-medium ${isActive('agence.html')}">${T.nav.agency}</a>
      <a href="reservation.html" class="block font-medium ${isActive('reservation.html')}">${T.nav.contact}</a>
      <div class="flex gap-2 pt-2">
        ${["fr","ar","en"].map(l => `<button data-lang="${l}" class="lang-btn px-3 py-1.5 rounded-full text-xs font-semibold border ${currentLang===l ? 'bg-blue-600 text-white border-blue-600' : 'border-slate-300'}">${l.toUpperCase()}</button>`).join("")}
      </div>
      <a href="reservation.html" class="block text-center bg-blue-600 text-white font-semibold py-3 rounded-xl">${T.nav.reserve}</a>
    </div>
  </header>`;

  el.querySelectorAll(".lang-btn").forEach(btn => btn.addEventListener("click", () => setLang(btn.dataset.lang)));
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  if (hamburger && mobileMenu) hamburger.addEventListener("click", () => mobileMenu.classList.toggle("hidden"));
}

/* ---------------- FOOTER ---------------- */
function renderFooter() {
  const el = document.getElementById("footer");
  if (!el) return;
  const T = t();
  el.innerHTML = `
  <footer class="bg-[#0B1120] text-slate-300 pt-16 pb-8 mt-24">
    <div class="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
      <div>
        <span class="text-2xl font-black text-white">TRINITY<span class="text-blue-500">CAR</span></span>
        <p class="text-[10px] tracking-[0.25em] text-slate-500 mt-1 mb-4">LOCATION VOITURE OUJDA</p>
        <p class="text-sm text-slate-400 leading-relaxed">${T.footer.about}</p>
        <div class="flex gap-3 mt-5">
          <a href="${AGENCY.social.facebook}" aria-label="Facebook" class="w-9 h-9 rounded-full border border-slate-600 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-colors"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 10-11.5 9.9v-7H8v-2.9h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6v1.9H16l-.4 2.9h-2.1v7A10 10 0 0022 12z"/></svg></a>
          <a href="${AGENCY.social.instagram}" aria-label="Instagram" class="w-9 h-9 rounded-full border border-slate-600 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-colors"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c3.2 0 3.6 0 4.9.07 3.3.15 4.8 1.7 4.9 4.9.07 1.3.07 1.6.07 4.8s0 3.6-.07 4.9c-.15 3.2-1.7 4.8-4.9 4.9-1.3.07-1.6.07-4.9.07s-3.6 0-4.9-.07c-3.3-.15-4.8-1.7-4.9-4.9C2.13 15.6 2.13 15.3 2.13 12s0-3.6.07-4.9c.15-3.2 1.7-4.8 4.9-4.9C8.4 2.2 8.7 2.2 12 2.2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 8.2a3.2 3.2 0 110-6.4 3.2 3.2 0 010 6.4zm5.2-8.4a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4z"/></svg></a>
          <a href="${AGENCY.social.whatsapp}" aria-label="WhatsApp" class="w-9 h-9 rounded-full border border-slate-600 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-colors"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l5.06-1.33A9.94 9.94 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"/></svg></a>
        </div>
      </div>
      <div>
        <h4 class="text-white font-semibold mb-4 text-sm tracking-wide">${T.footer.links}</h4>
        <ul class="space-y-2.5 text-sm">
          <li><a href="index.html" class="hover:text-white transition-colors">${T.nav.home}</a></li>
          <li><a href="flotte.html" class="hover:text-white transition-colors">${T.nav.fleet}</a></li>
          <li><a href="agence.html" class="hover:text-white transition-colors">${T.nav.agency}</a></li>
          <li><a href="reservation.html" class="hover:text-white transition-colors">${T.nav.contact}</a></li>
        </ul>
      </div>
      <div>
        <h4 class="text-white font-semibold mb-4 text-sm tracking-wide">${T.footer.services}</h4>
        <ul class="space-y-2.5 text-sm text-slate-400">
          <li>${T.footer.s1}</li><li>${T.footer.s2}</li><li>${T.footer.s3}</li><li>${T.footer.s4}</li><li>${T.footer.s5}</li>
        </ul>
      </div>
      <div>
        <h4 class="text-white font-semibold mb-4 text-sm tracking-wide">${T.footer.contactUs}</h4>
        <ul class="space-y-3 text-sm text-slate-400">
          <li class="flex gap-2"><span>📍</span><span>${AGENCY.address[currentLang]}</span></li>
          <li class="flex gap-2"><span>📞</span><a href="tel:+${AGENCY.whatsapp}" class="hover:text-white">${AGENCY.phoneDisplay}</a></li>
          <li class="flex gap-2"><span>💬</span><a href="${AGENCY.social.whatsapp}" class="hover:text-white">wa.me/${AGENCY.whatsapp}</a></li>
        </ul>
        <a href="${AGENCY.mapUrl}" target="_blank" rel="noopener" class="mt-4 block text-center text-xs font-semibold border border-slate-600 rounded-lg py-2.5 hover:bg-slate-800 transition-colors">${T.footer.map}</a>
      </div>
    </div>
    <div class="max-w-7xl mx-auto px-5 md:px-8 border-t border-slate-800 mt-10 pt-6 text-xs text-slate-500 text-center">
      © ${new Date().getFullYear()} Trinity Car — ${T.footer.about} ${T.footer.rights}
    </div>
  </footer>`;
}

/* ---------------- CAR CARD RENDER ---------------- */
const CATEGORY_LABEL = {
  economy: { fr: "Économique", ar: "اقتصادية", en: "Economy" },
  confort: { fr: "Confort", ar: "مريحة", en: "Comfort" },
  luxe: { fr: "Luxe", ar: "فاخرة", en: "Luxury" }
};

function carCardHTML(car, index, options = {}) {
  const T = t();
  const g = car.gearbox[currentLang], f = car.fuel[currentLang];
  const trimLabel = car.trim ? car.trim[currentLang] : "";
  const catLabel = car.category ? CATEGORY_LABEL[car.category][currentLang] : "";
  return `
  <div class="car-card group relative bg-white rounded-2xl border border-slate-200 hover:border-blue-300 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden" data-car="${car.id}">
    <div class="relative overflow-hidden h-44">
      ${options.numbered ? `<span class="absolute top-3 ${currentLang==='ar'?'right-3':'left-3'} text-3xl font-black text-blue-100 z-10">${String(index+1).padStart(2,'0')}</span>` : ""}
      ${catLabel ? `<span class="absolute top-3 ${currentLang==='ar'?'left-3':'right-3'} z-10 bg-white/90 text-[10px] font-bold text-blue-700 px-2.5 py-1 rounded-full">${catLabel}</span>` : ""}
      <img src="${car.image}" alt="${car.name} ${car.year} - Trinity Car" loading="lazy" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
      <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
    <div class="p-5">
      <div class="flex items-baseline justify-between mb-1">
        <h3 class="font-bold text-slate-900 text-lg">${car.name}</h3>
        <span class="text-xs text-slate-400">${car.year}</span>
      </div>
      ${trimLabel ? `<p class="text-xs text-slate-400 mb-2">${trimLabel}</p>` : ""}
      <div class="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500 mb-4">
        <span>⚙️ ${g}</span><span>❄️ ${currentLang==='ar'?'مكيف':(currentLang==='en'?'A/C':'Climatisation')}</span>
        <span>👥 ${car.seats} ${currentLang==='ar'?'أماكن':(currentLang==='en'?'seats':'Places')}</span><span>⛽ ${f}</span>
      </div>
      <div class="flex items-center justify-between">
        <div><span class="text-2xl font-black text-blue-600">${car.pricePerDay}</span> <span class="text-xs text-slate-500">${T.fleetSection.perDay}</span></div>
        <a href="reservation.html?car=${car.id}" class="choose-btn bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors">${T.fleetSection.choose}</a>
      </div>
    </div>
  </div>`;
}

/* ---------------- WHATSAPP HELPERS ---------------- */
function buildWaLink(message) {
  return `https://wa.me/${AGENCY.whatsapp}?text=${message}`;
}

function openWhatsApp(message) {
  const url = buildWaLink(message);
  const win = window.open(url, "_blank");
  setTimeout(() => {
    if (!win || win.closed || typeof win.closed === "undefined") {
      const plain = decodeURIComponent(message).replace(/%0A/g, "\n");
      navigator.clipboard?.writeText(plain).then(() => {
        alert(t().reservationPage.copied);
      }).catch(() => {
        alert(t().reservationPage.copyFail);
      });
    }
  }, 800);
}

/* ---------------- INIT ---------------- */
document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.lang = t().htmlLang;
  document.documentElement.dir = t().dir;
  document.body.classList.toggle("font-arabic", currentLang === "ar");
  renderNavbar();
  renderFooter();
});
