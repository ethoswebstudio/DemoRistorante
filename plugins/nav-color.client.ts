export default defineNuxtPlugin(() => {
  const html = document.documentElement

  // aggiorna var su load (serve se arrivi in mezzo a una sezione)
  const update = (theme: string | null) =>
    html.style.setProperty('--nav-color', theme === 'light' ? '#000000' : '#ffffff')

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(e => {
        if (e.isIntersecting) update(e.target.getAttribute('data-theme'))
      })
    },
    { rootMargin: '0px 0px -60% 0px', threshold: 0 }
  )

  document.querySelectorAll('[data-theme]').forEach(section => observer.observe(section))
})