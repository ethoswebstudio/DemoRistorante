
<script setup lang="ts">
const items = [
  '/img/carousel/farina.png',
  '/img/carousel/fetta_pizza_front.png',
  '/img/carousel/impasti.png',
  '/img/carousel/ingredienti.png',
  '/img/carousel/parmigiano.png',
  '/img/carousel/pizza_detail.png',
  '/img/carousel/Pizza_in_mano.png',
  '/img/carousel/pizza_in_forno.png',
]
</script>

<template>
  <UCarousel
    v-slot="{ item }"
    class-names
    arrows
    :items="items"
    :ui="{
      item: 'transition-opacity [&:not(.is-snapped)]:opacity-40' //basis-[70%]
    }"
    class="mx-auto max-w-sm"
  >
    <img :src="item" width="1000" height="1000" class="rounded-xl">
  </UCarousel>
</template>

