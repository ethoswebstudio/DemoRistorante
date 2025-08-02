<template>
  <main
    class="bg-white text-shadow-xs text-black padding-px padding-py"
    data-theme="light"
  >
    <div class="flex justify-center">
      <p class="text-5xl font-bold leading-loose uppercase">menu</p>
    </div>
    <div class="flex flex-col gap-y-5">
      <p class="text-3xl uppercase">Pizze</p>
      <ul
        v-if="pizze?.length"
        class="flex flex-col lg:grid grid-cols-2 grid-flow-row gap-y-3"
      >
        <li v-for="pizza in pizze">
          <div class="pr-5 lg:pr-28 flex flex-row items-center justify-between">
            <span class="font-semibold uppercase text-base">{{
              pizza.name
            }}</span>
            <span>{{ pizza.prezzo }}€</span>
          </div>
          <span class="text-black/65 text-sm">{{ pizza.ingredienti }}</span>
          <Icon
            v-if="pizza.allergeni"
            name="lucide:asterisk"
            class="text-black/65"
            size="12"
          />
        </li>
      </ul>
      <div class="flex flex-col lg:grid grid-cols-2 grid-flow-row gap-y-3">
        <div class="flex flex-col gap-y-5">
          <p class="text-3xl uppercase">Stuzzicherie</p>
          <ul v-if="stuzzichini?.length">
            <li v-for="stuzzichino in stuzzichini">
              <div
                class="pr-5 lg:pr-28 flex flex-row items-center justify-between"
              >
                <span class="font-semibold uppercase text-xl">{{
                  stuzzichino.name
                }}</span>
                <span>{{ stuzzichino.prezzo }}€</span>
              </div>
              <Icon
                v-if="stuzzichino.allergeni"
                name="lucide:asterisk"
                class="text-black/65"
                size="12"
              />
            </li>
          </ul>
        </div>
        <div class="flex flex-col gap-y-5">
          <p class="text-3xl uppercase">Bibite</p>
          <ul v-if="bibite?.length">
            <li v-for="bibita in bibite">
              <div
                class="pr-5 lg:pr-28 flex flex-row items-center justify-between"
              >
                <span class="font-semibold uppercase text-xl">{{
                  bibita.name
                }}</span>
                <span>{{ bibita.prezzo }}€</span>
              </div>
              <Icon
                v-if="bibita.allergeni"
                name="lucide:asterisk"
                class="text-black/65"
                size="12"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import menuJSON from "~/assets/files/menu.json";
interface Pizza {
  name: string;
  ingredienti: string;
  prezzo: number;
  allergeni: boolean;
}
interface Stuzzichino {
  name: string;
  prezzo: number;
  allergeni: boolean;
}
interface Bibita {
  name: string;
  prezzo: number;
  allergeni: boolean;
}

const pizze = ref<Pizza[]>([]);
const stuzzichini = ref<Stuzzichino[]>([]);
const bibite = ref<Bibita[]>([]);

pizze.value = menuJSON.pizze;
stuzzichini.value = menuJSON.stuzzicherie;
bibite.value = menuJSON.bibite;
</script>
<style></style>
