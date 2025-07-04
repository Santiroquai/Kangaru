<script setup>
import { modelos } from '@/data/modelos.js';
import ImageLoader from '@/components/ui/ImageLoader.vue'
</script>

<template>
  <section id="modelos" class="relative z-10 bg-yellow-100 text-white opacity-0 max-h-320 sm:min-h-screen pt-3 pb-1 sm:pt-10 sm:pb-3">
    <h2 class="text-xl sm:text-3xl font-bold text-center text-cyan-900 mb-4 sm:mb-10">- Nuestro stock -</h2>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-5 px-5 sm:px-65 text-cyan-800">
      <router-link 
        v-for="modelo in modelos" 
        :key="modelo.id"
        :to="`/modelos/${encodeURIComponent(modelo.id)}`"
        class="block hover:scale-102 transition-transform duration-200"
      >
        <div class="bg-white p-4 sm:p-6 rounded-xl shadow-md text-center flex flex-col items-center h-full min-h-[180px] sm:min-h-[260px]">
          <ImageLoader
            :src="modelo.imagen"
            :preview="modelo.preview"
            :alt="modelo.nombre"
            customClass="w-full max-w-[110px] sm:max-w-[180px] lg:max-w-[180px] object-contain sm:mb-8"
          />
          <h3 class="text-sm font-bold leading-tight">{{ modelo.nombre }}</h3>
          <p class="text-xs leading-tight">{{ modelo.descripcion }}</p>
        </div>
      </router-link>
    </div>

    <h2 class="text-xl sm:text-3xl font-bold text-center text-cyan-900 m-4 mb-5 sm:m-10">- Solicita un turno y pasa por el showroom! -</h2>
  </section>
</template>
