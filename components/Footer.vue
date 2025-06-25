<template>
  <footer>
    <!-- TOP SECTION -->
    <section
      id="footer1"
      class="padding-px padding-py relative isolate text-white 
      bg-[url('public/img/footer/footer_pizza_mob.png')] bg-cover bg-center
      xl:bg-[url('public/img/footer/footer_pizza.png')] bg-no-repeat"
    >

      <div
        class="relative mx-auto w-full max-w-7xl flex flex-col md:flex-row gap-12"
      >
        <!-- LEFT COLUMN: info + CTA -->
        <div
          class="flex-1 flex flex-col gap-10 text-center md:text-left items-center md:items-start"
        >
          <!-- Quote -->
          <p class="text-2xl sm:text-3xl font-black leading-tight max-w-xl">
            La fretta è la peggior nemica del piacere
          </p>

          <!-- Address -->
          <div class="space-y-2">
            <h3 class="text-xl sm:text-2xl font-semibold inline-flex items-center gap-2">
              Dove siamo <Icon name="mdi:map-marker" size="1em" />
            </h3>
            <ULink
              href="https://www.google.it/maps/place/La+bottega+del+cicchetto/@45.3187374,11.8637693,20.26z"
              target="_blank"
              class="block text-lg underline hover:text-amber-400 transition-colors"
            >
              Via&nbsp;Conselvana, 137 – Maserà&nbsp;di&nbsp;Padova
            </ULink>
          </div>

          <!-- Opening hours -->
          <div class="space-y-2">
            <h3 class="text-xl sm:text-2xl font-semibold inline-flex items-center gap-2">
              Orari <Icon name="mdi:clock" size="1em" />
            </h3>
            <p class="text-lg leading-relaxed">
              Lunedì–Domenica<br />10:00–15:00 • 17:00–22:00<br />
              <span class="font-semibold">Giovedì chiuso</span>
            </p>
          </div>

          <!-- CTA button -->
          <UButton
            to="mailto:prenotazioni@lapizzeria.it"
            icon="mdi:mail"
            size="xl"
            rounded="full"
            class="bg-amber-500 hover:bg-amber-600 text-black self-center md:self-start"
          >
            Prenota un tavolo
          </UButton>
        </div>

        <!-- RIGHT COLUMN: map (hidden on very small screens) -->
        <div class="flex-1 h-64 md:h-auto">
          <iframe
            title="Mappa – Dove siamo"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.9853556317403!2d11.861580315855398!3d45.318772979099675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477f538a22f85d8b%3A0x58e2b2043614d6f8!2sLa%20Bottega%20del%20Cicchetto!5e0!3m2!1sit!2sit!4v1687012345678!5m2!1sit!2sit"
            class="w-full h-full rounded-xl shadow-lg border-0"
          ></iframe>
        </div>
      </div>
    </section>

    <!-- BOTTOM BAR -->
    <section id="footerBottom" class="text-center text-black py-8 bg-white">
      <div
        class="mx-auto w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 text-center md:text-left"
      >
        <!-- Social label + icons grouped -->
        <div class="flex flex-col md:flex-row items-center gap-4">
          <p class="text-sm font-semibold shrink-0">Seguici sui social</p>
          <div class="flex justify-center gap-6 text-2xl">
            <UButton to="#" icon="mdi:facebook" size="lg" variant="ghost" aria-label="Facebook" class="text-amber-600"/>
            <UButton to="#" icon="mdi:instagram" size="lg" variant="ghost" aria-label="Instagram" class="text-amber-600"/>
            <UButton to="#" icon="mdi:youtube" size="lg" variant="ghost" aria-label="YouTube" class="text-amber-600"/>
          </div>
        </div>

        <!-- Copyright -->
        <p class="text-xs text-black">
          © {{ new Date().getFullYear() }} La&nbsp;Pizzeria. Tutti i diritti riservati.
        </p>
      </div>
    </section>
  </footer>
</template>

<script setup lang="ts">
// Footer stateless – no script needed
</script>
