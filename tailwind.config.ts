import preset from '@nuxt/ui'

export default {
  presets: [preset],
  content: [
    './components/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {
      colors: {
        buttonY: 'var(--buttonY)',
        buttonG: 'var(--buttonG)'
      }
    }
  }
}
