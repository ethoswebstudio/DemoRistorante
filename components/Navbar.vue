<template>
  <nav
    id="NavBar"
    :class="[
      'fixed top-3.5 inset-x-3.5 z-50 px-3 md:px-6 xl:px-8 py-1.5 md:py-2 xl:py-3',
      'flex justify-between items-center rounded-3xl',
      isScrolled ? 'backdrop-blur-md bg-white/10 shadow-md' : 'bg-transparent',
      isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
    ]"
  >
    <!-- Logo -->
    <ULink to="/" aria-label="Home">
      <img
        src="/img/logo_demo_restaurant.png"
        alt="Logo"
        class="w-16 h-16 md:w-20 md:h-14 xl:w-28 xl:h-28 transition-all duration-300"
      />
    </ULink>

    <!-- NAV DESKTOP -->
    <ul class="hidden xl:flex gap-12 font-semibold text-subt">
      <li><a href="#Sezione3" class="nav-link">Menu</a></li>
      <li><a href="#Sezione4" class="nav-link">Chi&nbsp;Siamo</a></li>
      <li><a href="#footer1" class="nav-link">Contatti</a></li>
    </ul>

    <!-- BURGER MOBILE -->
    <button
      @click="openMenu = true"
      class="xl:hidden w-10 h-10 flex items-center justify-center text-4xl nav-link"
      aria-label="Apri menu"
    >
      <Icon name="mdi:menu" />
    </button>
  </nav>

  <ClientOnly>
    <BurgerMenu :visible="openMenu" @close="openMenu = false" />
  </ClientOnly>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import BurgerMenu from '@/components/BurgerMenu.vue'

const openMenu = ref(false)
const isScrolled = ref(false)
const isVisible = ref(true)

let lastScrollY = 0

function handleScroll () {
  const y = window.scrollY
  isScrolled.value = y > 0
  lastScrollY = y
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
nav {
  transition-property: transform, opacity, background-color, backdrop-filter;
}

/* link che leggono la variabile --nav-color (settata dal plugin) */
.nav-link {
  color: var(--nav-color);
  transition: color 0.2s ease;
}
.nav-link:hover {
  color: #fbbf24; /* giallo hover fisso */
}
</style>