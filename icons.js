/* ============================================================
   TRINITY CAR — assets/icons.js
   Unified line-style SVG icon set (stroke="currentColor").
   Replaces emoji icons so the look is consistent across every
   OS/browser and can inherit the site's colors.
   Load this BEFORE ui.js / any inline page script that uses ICONS.
   ============================================================ */

const ICONS = {
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z"/><path d="M9 12l2 2 4-4"/></svg>',
  plane: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10.5 20l1.5-5 6.5-6.5a1.5 1.5 0 00-2-2L9.5 13 4.5 11.5 3 13l5 3 2 4z"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.1 6.6L12 17.5l-5.8 3.1 1.1-6.6-4.8-4.6 6.6-.9z"/></svg>',
  idCard: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="8.5" cy="11" r="1.8"/><path d="M6 16c.5-1.7 2-2.5 2.5-2.5s2 .8 2.5 2.5M14 9h5M14 12.5h5M14 16h3"/></svg>',
  wallet: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7a2 2 0 012-2h13a1 1 0 011 1v2"/><rect x="3" y="7" width="18" height="12" rx="2"/><circle cx="16.5" cy="13" r="1.2" fill="currentColor" stroke="none"/></svg>',
  route: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="2"/><circle cx="18" cy="18" r="2"/><path d="M6 8v3a3 3 0 003 3h6a3 3 0 013 3v1"/></svg>',
  card: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="5" width="19" height="14" rx="2"/><path d="M2.5 10h19"/><path d="M6 15h4"/></svg>',
  calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="5" width="17" height="16" rx="2"/><path d="M8 3v4M16 3v4M3.5 10h17"/></svg>',
  checkCircle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8.5 12.5l2.2 2.2L16 10"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5"/><circle cx="17.5" cy="9" r="2.3"/><path d="M15.7 14.7c2.5.3 4.3 2.2 4.3 5.3"/></svg>',
  snowflake: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M12 2v20M4.5 6.5l15 11M19.5 6.5l-15 11M12 6l-2 2M12 6l2 2M12 18l-2-2M12 18l2-2M6 10l2.7 1M6 10l1 2.7M18 10l-2.7 1M18 10l-1 2.7M6 14l1-2.7M6 14l2.7-1M18 14l-1-2.7M18 14l-2.7-1"/></svg>',
  fuel: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 21V6a2 2 0 012-2h6a2 2 0 012 2v15"/><path d="M4 12h10"/><path d="M16 9l3 2v6a1.5 1.5 0 003 0V9.5L19 6.5"/><path d="M2.5 21h13.5"/></svg>',
  gear: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 3v2.2M12 18.8V21M4.9 4.9l1.6 1.6M17.5 17.5l1.6 1.6M3 12h2.2M18.8 12H21M4.9 19.1l1.6-1.6M17.5 6.5l1.6-1.6"/></svg>',
  mapPin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-6.5-6-6.5-11A6.5 6.5 0 1118.5 10c0 5-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.3"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h3l1.5 4.5L7 10.5a12 12 0 007 7l1.5-2.5L20 16v3a1 1 0 01-1 1C10.5 20 4 13.5 4 5a1 1 0 011-1z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M4 6.5l8 6 8-6"/></svg>',
  gift: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="9" width="17" height="11" rx="1.5"/><path d="M3.5 13h17M12 9v11"/><path d="M12 9C9 9 8 7.5 8 6.3A2.3 2.3 0 0110.3 4c1.7 0 1.7 2.5 1.7 5zM12 9c3 0 4-1.5 4-2.7A2.3 2.3 0 0013.7 4C12 4 12 6.5 12 9z"/></svg>',
  sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2.2M12 19.8V22M4.2 4.2l1.6 1.6M18.2 18.2l1.6 1.6M2 12h2.2M19.8 12H22M4.2 19.8l1.6-1.6M18.2 5.8l1.6-1.6"/></svg>',
  document: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3h7l4 4v14a1 1 0 01-1 1H7a1 1 0 01-1-1V4a1 1 0 011-1z"/><path d="M14 3v4h4M9 13h6M9 16.5h6"/></svg>',
  gauge: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15a8 8 0 1116 0"/><path d="M12 15l3.5-4.5"/><circle cx="12" cy="15" r="1.2" fill="currentColor" stroke="none"/></svg>',
  key: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="7.5" cy="15.5" r="3.5"/><path d="M10.5 13l8-8M15.5 8l2.5 2.5M18 5.5L20.5 8"/></svg>',
  lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="10.5" width="14" height="9.5" rx="2"/><path d="M8 10.5V7a4 4 0 018 0v3.5"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l5.06-1.33A9.94 9.94 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm5.2 14.2c-.22.62-1.28 1.18-1.77 1.25-.45.07-1.02.1-1.65-.1-.38-.12-.87-.28-1.5-.55-2.63-1.14-4.35-3.8-4.48-3.98-.13-.17-1.07-1.42-1.07-2.71 0-1.29.68-1.92.92-2.18.24-.26.53-.32.7-.32.18 0 .35 0 .5.01.16.01.38-.06.6.46.22.53.75 1.83.82 1.96.07.14.11.3.02.48-.09.18-.14.29-.27.44-.14.16-.29.35-.41.47-.14.14-.28.29-.12.57.16.27.71 1.18 1.53 1.91 1.05.94 1.94 1.23 2.21 1.37.27.14.43.12.59-.07.16-.2.68-.79.86-1.06.18-.27.36-.22.6-.13.25.09 1.57.74 1.84.88.27.14.45.2.51.32.07.12.07.68-.15 1.3z"/></svg>',
  facebook: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M22 12a10 10 0 10-11.5 9.9v-7H8v-2.9h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6v1.9H16l-.4 2.9h-2.1v7A10 10 0 0022 12z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2.2c3.2 0 3.6 0 4.9.07 3.3.15 4.8 1.7 4.9 4.9.07 1.3.07 1.6.07 4.8s0 3.6-.07 4.9c-.15 3.2-1.7 4.8-4.9 4.9-1.3.07-1.6.07-4.9.07s-3.6 0-4.9-.07c-3.3-.15-4.8-1.7-4.9-4.9C2.13 15.6 2.13 15.3 2.13 12s0-3.6.07-4.9c.15-3.2 1.7-4.8 4.9-4.9C8.4 2.2 8.7 2.2 12 2.2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 8.2a3.2 3.2 0 110-6.4 3.2 3.2 0 010 6.4zm5.2-8.4a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4z"/></svg>',
  chevronRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg>',
  expand: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H4a1 1 0 00-1 1v4M16 3h4a1 1 0 011 1v4M8 21H4a1 1 0 01-1-1v-4M16 21h4a1 1 0 001-1v-4"/></svg>',
  close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>'
};

function icon(name, cls = "") {
  const svg = ICONS[name];
  if (!svg) return "";
  return svg.replace("<svg ", `<svg class="icon ${cls}" `);
}
