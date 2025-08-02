<template>
  <main id="homepage" class="relative bg-white text-shadow-xs">
    <!-- =============================================================== -->
    <!-- LANDING / HERO                                                 -->
    <!-- =============================================================== -->
    <section
      id="landing"
      class="relative isolate flex flex-col lg:flex-row items-center gap-8 padding-px pt-20 pb-12 sm:pt-20 sm:pb-14 md:pt-28 md:pb-20 lg:pt-36 lg:pb-24 xl:pt-48 xl:pb-[7.5rem] overflow-hidden bg-[url('/img/landing_mob.png')] bg-cover bg-center xl:bg-[url('/img/landing_pizza.png')] bg-no-repeat"
      data-theme="dark"
    >
      <!-- COLONNA TESTO -->
      <div class="relative z-10 flex-1 flex flex-col gap-6 max-w-xl">
        <p class="uppercase text-subt text-amber-100">
          Nuova Pizzeria a Padova!
        </p>
        <h1 class="text-megat leading-none">Pizzeria</h1>
        <p class="text-desc opacity-90">
          Dove la pizza è arte e passione. Impasto a lunga lievitazione,
          ingredienti freschi e forno rovente: ogni fetta racconta una storia di
          gusto e tradizione. Perfetta per una serata in compagnia o un pranzo
          veloce ma genuino.
        </p>
        <UButton
          to="mailto:prenotazioni@lapizzeria.it"
          size="xl"
          rounded="full"
          class="bg-amber-500 hover:bg-amber-600 text-black font-semibold gap-2"
        >
          Prenota un tavolo
          <span class="text-btn">➔</span>
        </UButton>
      </div>
    </section>

    <!-- =============================================================== -->
    <!-- SEZIONE 1 – Molto più di un Ristorante                           -->
    <!-- =============================================================== -->
    <section
      id="Sezione1"
      class="text-black padding-px padding-py relative isolate flex flex-col lg:flex-row gap-12"
      data-theme="light"
    >
      <div class="relative flex-1 flex flex-col justify-center gap-4">
        <h2 class="text-title">Molto più di una Pizzeria</h2>
        <p class="text-desc">
          Non serviamo solo pizze, ma esperienze da condividere. Che tu venga
          per una margherita classica o una gourmet dai sapori audaci, troverai
          un ambiente accogliente, un servizio attento e un&#146; atmosfera che sa di
          casa.
          <br class="hidden sm:inline" />
          Proponiamo anche pizze per eventi, menù su misura per gruppi e serate
          a tema con nuove creazioni. Ogni occasione è buona per gustare
          qualcosa di speciale.
        </p>
      </div>

      <div class="relative flex-1 max-w-md mx-auto lg:mx-0">
        <Carousel />
      </div>
    </section>

    <!-- =============================================================== -->
    <!-- SEZIONE 2 – Cicchetti tipici e vini                              -->
    <!-- =============================================================== -->
    <section
      id="Sezione2"
      class="text-black padding-px padding-py relative isolate flex flex-col lg:flex-row gap-12"
      data-theme="light"
    >
      <div
        class="relative flex-1 order-2 lg:order-1 flex justify-center lg:justify-start"
      >
        <!--class="w-56 sm:w-80 lg:w-[28rem] object-contain"-->
        <NuxtImg
          src="/img/carousel/ingredienti.png"
          alt="Cicchetti tipici"
          format="webp"
          class="rounded-xl"
          loading="lazy"
          draggable="false"
        />
      </div>

      <div
        class="relative flex-1 order-1 lg:order-2 flex flex-col justify-center gap-4"
      >
        <h2 class="text-title">Cicchetti tipici e vini</h2>
        <p class="text-desc">
          Gusto veneto, spirito conviviale. Oltre alla pizza, proponiamo
          cicchetti tipici da accompagnare con una selezione di vini locali. Un
          modo semplice e autentico per iniziare la serata o godersi un
          aperitivo diverso dal solito.
        </p>
      </div>
    </section>

    <!-- =============================================================== -->
    <!-- SEZIONE 3 – Scopri il menù                                       -->
    <!-- =============================================================== -->
    <section
      id="Menu"
      class="padding-px padding-py scroll-mt-32 relative isolate text-center flex flex-col items-center gap-8 bg-[url('/img/menu_pizza_mob.png')] bg-cover bg-center xl:bg-[url('/img/menu_pizza.png')] bg-no-repeat"
      data-theme="dark"
    >
      <h2 class="text-title">Scopri il Nostro Menù</h2>
      <p class="text-desc">
        Dal forno alla tavola, ogni pizza è preparata con amore e ingredienti
        selezionati. Impasto digeribile, farine di qualità e condimenti freschi
        danno vita a un menù che unisce tradizione e creatività. Dalle classiche
        intramontabili alle specialità stagionali, ce n&#146;è per tutti i gusti.
      </p>
      <!-- _blank nuova finestra/scheda -->
      <!-- noopener sicurezza -->
      <UButton
        href="/pdf/pdf_menu_pizzeria.pdf"
        target="_blank"
        rel="noopener"
        size="xl"
        rounded="full"
        leading-icon="mdi:pdf-box"
        class="bg-amber-500 hover:bg-amber-600 text-black"
      >
        Visualizza il menù
      </UButton>
    </section>

    <!-- =============================================================== -->
    <!-- SEZIONE 4 – Passione e Accoglienza                               -->
    <!-- =============================================================== -->
    <section
      id="ChiSiamo"
      class="text-black padding-px padding-py relative isolate flex flex-col lg:flex-row gap-12"
      data-theme="light"
    >
      <div class="relative flex-1 flex flex-col justify-center gap-4">
        <h2 class="text-title">Passione e Accoglienza</h2>
        <p class="text-desc">
          Siamo una pizzeria di famiglia, nata dal desiderio di condividere ciò
          che ci appassiona: la buona pizza e l&#146;ospitalità. Ogni giorno
          impastiamo con cura e serviamo con il sorriso, perché per noi cucinare
          è anche prendersi cura delle persone. Crediamo nella semplicità, nei
          sapori veri e nei momenti autentici passati insieme. È questo il
          nostro ingrediente segreto.
        </p>
      </div>

      <div class="relative flex-1 flex justify-center lg:justify-start">
        <NuxtImg
          src="/img/carousel/pizza_no_wllp.png"
          alt="Chef al lavoro"
          class="rounded-xl"
          format="webp"
          loading="lazy"
          draggable="false"
        />
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
// Componenti auto‑import (Nuxt UI) → non servono import espliciti
// Carousel presente in @/components/Carousel.vue
</script>

<style scoped>
.clip-top {
  clip-path: polygon(0 -5vw, 100% 0, 100% 100%, 0 100%);
}
.clip-bottom {
  clip-path: polygon(0 0, 100% 5vw, 100% 100%, 0 100%);
}
</style>
