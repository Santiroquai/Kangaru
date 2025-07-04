<script setup>
import LocationIcon from '@/components/ui/icons/LocationIcon.vue'
import ContactIcon from '@/components/ui/icons/ContactIcon.vue'
import InstagramIcon from '@/components/ui/icons/InstagramIcon.vue'
</script>

<template>
  <section class="bg-gradient-to-b from-cyan-900 to-cyan-950 text-white min-h-screen py-14 sm:py-34 px-6 sm:px-20 lg:px-60">
    <h1 class="text-3xl sm:text-5xl font-bold text-center text-yellow-100 mb-10 sm:mb-20">- Contacto -</h1>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6"> 

      <!-- Showroom Recoleta -->
      <div class="bg-cyan-800/50 p-6 rounded-xl">
        <div class="flex items-center gap-3 mb-4">
          <LocationIcon class="w-6 h-6" />
          <h3 class="text-xl font-semibold">Showroom Recoleta</h3>
        </div>
        <p class="text-cyan-200">Av. Santa Fe 3253</p>
        <p class="text-cyan-200">Lunes a viernes, 10 hs a 18 hs</p>
      </div>


      <!-- Showroom City Bell -->
      <div class="bg-cyan-800/50 p-6 rounded-xl">
        <div class="flex items-center gap-3 mb-4">
          <LocationIcon class="w-6 h-6" />
          <h3 class="text-xl font-semibold">Showroom City Bell</h3>
        </div>
        <p class="text-cyan-200">Cantilo 265</p>
        <p class="text-cyan-200">Lunes a sábados, 10 hs a 19 hs</p>
      </div>


      <!-- Contacto directo -->
      <div class="bg-cyan-800/50 p-6 rounded-xl">
        <div class="flex items-center gap-3 mb-4">
          <ContactIcon class="w-6 h-6" />
          <h3 class="text-xl font-semibold">Contacto directo</h3>
        </div>
        <p class="text-cyan-200">WhatsApp: <a href="https://wa.me/5491123456789" target="_blank" class="">+54 9 11 2345 6789</a></p>
        <p class="text-cyan-200">Email: <a href="mailto:contacto@kangaru.store" class="text-yellow-100 underline">contacto@kangaru.store</a></p>
        <p class="text-cyan-200"><a href="https://instagram.com/kangaru" target="_blank" class="text-yellow-100 flex items-center gap-2 mt-2"><InstagramIcon class="w-4 h-4" />@kangaru</a></p>
      </div>
    </div>

    <div class="mt-16 text-center max-w-3xl mx-auto px-4">
      <p class="text-xl sm:text-2xl text-white">
        ¿Querés coordinar una visita al showroom o tenés alguna duda? ¡Escribinos, y te respondemos rápido!
      </p>
    </div>

    <!-- Botón para volver al inicio -->
    <div class="text-center mt-10 md:mt-24">
      <router-link
        to="/"
        class="inline-block text-sm px-6 py-3 sm:text-md sm:px-8 sm:py-4 bg-cyan-800 hover:bg-cyan-700 text-white font-bold rounded-lg transition-colors duration-300"
      >
        Volver al inicio
      </router-link>
    </div>

  </section>
</template>
