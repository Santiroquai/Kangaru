<script setup>
import InstagramIcon from '@/components/ui/icons/InstagramIcon.vue'

</script>

<template>
    <div class="relative min-h-screen z-10 bg-gradient-to-b from-cyan-950 to-cyan-900 flex flex-col items-center justify-center px-4 sm:px-8">
      
      <div class="max-w-6xl w-full space-y-6 bg-cyan-950 mt-10 p-4 pb-10 sm:p-12 rounded-2xl">
      <h1 class="text-3xl sm:text-5xl font-bold text-center text-yellow-100 mb-5 mt-3 sm:mb-20"> Contacto</h1>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6"> 
          <!-- Showroom Recoleta -->
          <div class="bg-cyan-800/50 p-6 rounded-xl">
            <div class="flex items-center gap-3 mb-4">
              <h3 class="text-xl font-semibold">Showroom Recoleta</h3>
            </div>
            <p class="text-cyan-200">Av. Santa Fe 3253</p>
            <p class="text-cyan-200">Lunes a viernes, 10 hs a 18 hs</p>
          </div>

          <!-- Showroom City Bell -->
          <div class="bg-cyan-800/50 p-6 rounded-xl">
            <div class="flex items-center gap-3 mb-4">
              <h3 class="text-xl font-semibold">Showroom City Bell</h3>
            </div>
            <p class="text-cyan-200">Cantilo 265</p>
            <p class="text-cyan-200">Lunes a sábados, 10 hs a 19 hs</p>
          </div>

          <!-- Contacto directo -->
          <div class="bg-cyan-800/50 p-6 rounded-xl">
            <div class="flex items-center gap-3 mb-4">
              <h3 class="text-xl font-semibold">Contacto directo</h3>
            </div>
            <p class="text-cyan-200">WhatsApp: <a href="https://wa.me/5491123456789" target="_blank" class="">+54 9 11 2345 6789</a></p>
            <p class="text-cyan-200">Email: <a href="mailto:contacto@kangaru.store" class="text-yellow-100">contacto@kangaru.store</a></p>
            <p class="text-cyan-200"><a href="https://instagram.com/kangaru" target="_blank" class="text-yellow-100 flex items-center gap-2 mt-2"><InstagramIcon class="w-4 h-4" />@kangaru</a></p>
          </div>

      </div>
    </div>

      <div class="mt-16 text-center max-w-3xl mx-auto px-4">
        <p class="text-xl sm:text-2xl text-white">
          ¿Querés coordinar una visita al showroom o tenés alguna duda? ¡Escribinos, y te respondemos rápido!
        </p>
      </div>

      <!-- Botón para volver al inicio -->
      <div class="text-center mt-10 md:mt-18 mb-15">
        <router-link
          to="/"
          class="inline-block text-sm px-6 py-3 sm:text-md sm:px-8 sm:py-4 bg-cyan-800 hover:bg-cyan-700 text-white font-bold rounded-lg transition-colors duration-300"
        >
          Volver al inicio
        </router-link>
      </div>
      
    </div>
</template>
