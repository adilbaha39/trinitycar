/* ============================================================
   TRINITY CAR — assets/i18n.js
   Translations + language state (depends on nothing else)
   ============================================================ */

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
      valuesTitle: "Nos valeurs", v1: "Transparence sur les prix, sans frais cachés.", v2: "Véhicules récents, révisés et assurés.", v3: "Ouvert 7j/7, de 10h à 18h.",
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
      valuesTitle: "قيمنا", v1: "شفافية فالأثمنة، بلا مصاريف خفية.", v2: "سيارات حديثة، مراقبة ومؤمنة.", v3: "مفتوحين 7/7 أيام، من 10 صباحا إلى 18 مساء.",
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
      valuesTitle: "Our values", v1: "Price transparency, no hidden fees.", v2: "Recent, serviced and insured vehicles.", v3: "Open 7 days a week, 10am–6pm.",
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
  document.documentElement.classList.add("lang-fade");
  setTimeout(() => {
    currentLang = lang;
    localStorage.setItem("tc_lang", lang);
    document.documentElement.lang = I18N[lang].htmlLang;
    document.documentElement.dir = I18N[lang].dir;
    document.body.classList.toggle("font-arabic", lang === "ar");
    renderNavbar();
    renderFooter();
    if (typeof renderFloatingWhatsApp === "function") renderFloatingWhatsApp();
    if (typeof renderStickyBookBar === "function") renderStickyBookBar();
    if (typeof initSvgDraw === "function") initSvgDraw();
    if (typeof onLangChange === "function") onLangChange();
    requestAnimationFrame(() => document.documentElement.classList.remove("lang-fade"));
  }, 150);
}

