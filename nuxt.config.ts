import { defineNuxtConfig } from "nuxt/config";

// nuxt.config.ts – versione snellita
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',

  // 1.  Moduli senza duplicati
  modules: [
    '@nuxt/ui',
    '@nuxt/icon',
    '@nuxt/image',          // ← lasciato una sola volta
    [
      '@nuxtjs/google-fonts',
      { families: { 'DM Sans': '100..900' }, display: 'swap' }
    ]
  ],

  // 2.  CSS: un solo entry-point (raggruppa theme e utility in main.css)
  css: ['@/assets/css/theme.css', '@/assets/css/main.css'],


  // 3.  Runtime config per contenuti ri-brandizzabili
  runtimeConfig: {
    public: {
      siteName: 'Pizzeria Demo',
      defaultOgImage: '/img/og-default.jpg'
    }
  }
})
