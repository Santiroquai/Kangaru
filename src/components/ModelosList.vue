<script setup>
import { modelos } from '@/data/modelos.js';
import ImageLoader from '@/components/ui/ImageLoader.vue'
</script>

<template>
  <section id="modelos" class="relative z-10 bg-yellow-100 text-white opacity-0 max-h-358 sm:min-h-screen py-24 pt-10 pb-2">
    <h2 class="text-3xl font-bold text-center text-cyan-900 mb-10">- Nuestro stock -</h2>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 px-4 sm:px-65 text-cyan-800">
      <router-link 
        v-for="modelo in modelos" 
        :key="modelo.id"
        :to="`/modelos/${encodeURIComponent(modelo.id)}`"
        class="block hover:scale-102 transition-transform duration-200"
      >
        <div class="bg-white p-6 rounded-xl shadow-md text-center flex flex-col items-center h-full min-h-[260px]">
          <ImageLoader
            :src="modelo.imagen"
            :preview="modelo.preview"
            :alt="modelo.nombre"
            customClass="w-full max-w-[160px] aspect-[3/4] object-contain mb-4"
          />
          <h3 class="text-sm font-bold leading-tight">{{ modelo.nombre }}</h3>
          <p class="text-xs leading-tight">{{ modelo.descripcion }}</p>
        </div>
      </router-link>
    </div>

    <h2 class="text-2xl lg:text-3xl font-bold text-center text-cyan-900 m-5 lg:m-10">- Solicita un turno y pasa por el showroom! -</h2>
  </section>
</template>
