<!-- BurgerMenu.vue – revamped -->
<template>
  <Transition name="slide-fade">
    <aside v-if="visible" class="fixed inset-0 z-50 flex">
      <!-- Overlay oscurante -->
      <button
        aria-label="Chiudi menu"
        class="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        @click="$emit('close')"
      />

      <!-- Pannello -->
      <nav
        class="relative ml-auto h-full w-4/5 max-w-xs flex flex-col
               bg-gradient-to-b from-neutral-900/95 via-neutral-800/95 to-neutral-900/95
               backdrop-blur-md shadow-2xl border-l border-white/10
               px-6 py-8 gap-10"
      >
        <!-- Logo + Close -->
        <div class="flex items-center justify-between">
          <p class="text-subt">
            Pizzeria
          </p>

          <UButton
            icon="mdi:close"
            variant="ghost"
            size="lg"
            color="neutral"
            aria-label="Chiudi"
            @click="$emit('close')"
          />
        </div>

        <!-- Link di navigazione -->
        <ul class="flex flex-col gap-8 text-lg font-semibold tracking-wide">
          <li>
            <a
              href="/menu"
              @click="$emit('close')"
              class="flex items-center justify-between group hover:text-amber-400"
            >
              Menu
              <Icon name="mdi:chevron-right" class="text-xl transition-transform group-hover:translate-x-1" />
            </a>
          </li>
          <li>
            <a
              href="#ChiSiamo"
              @click="$emit('close')"
              class="flex items-center justify-between group hover:text-amber-400"
            >
              Chi Siamo
              <Icon name="mdi:chevron-right" class="text-xl transition-transform group-hover:translate-x-1" />
            </a>
          </li>
          <li>
            <a
              href="#Footer"
              @click="$emit('close')"
              class="flex items-center justify-between group hover:text-amber-400"
            >
              Contatti
              <Icon name="mdi:chevron-right" class="text-xl transition-transform group-hover:translate-x-1" />
            </a>
          </li>
        </ul>

        <!-- CTA finali -->
        <div class="mt-auto flex flex-col gap-4">
          <UButton
            to="tel:+3900000000"
            icon="mdi:phone"
            size="lg"
            rounded="full"
            class="w-full bg-amber-500 hover:bg-amber-600 text-black"
          >
            Chiama ora
          </UButton>
          <UButton
            to="mailto:prenotazioni@lapizzeria.it"
            icon="mdi:mail"
            variant="ghost"
            size="lg"
            rounded="full"
            class="w-full hover:bg-amber-400/10 text-amber-400"
          >
            Prenota via mail
          </UButton>
        </div>

        <p class="pt-6 text-center text-xs text-gray-400">
          © {{ new Date().getFullYear() }} La Pizzeria.
        </p>
      </nav>
    </aside>
  </Transition>
</template>

<script setup lang="ts">
defineProps<{ visible: boolean }>()
defineEmits<{ (e: 'close'): void }>()
</script>

<style scoped>
/* Animazione slide + fade */
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
.slide-fade-enter-to,
.slide-fade-leave-from {
  transform: translateX(0);
  opacity: 1;
}
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}
</style>
