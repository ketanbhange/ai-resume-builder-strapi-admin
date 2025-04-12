module.exports = [
  {
    name: 'strapi::cors',
    config: {
      origin: '*',  // Allow all origins
      headers: ['Content-Type', 'Authorization'],
    },
  },
  {
    name: 'strapi::security',
    config: {
      ssl: false,  // 🔥 Disable forced SSL
      frameguard: false,  // Fix security issues for development
    },
  },
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
