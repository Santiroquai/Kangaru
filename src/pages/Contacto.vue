<script setup>
import HeroKeyBackground from "@/assets/hero-key-background.webp"
import InstagramIcon from '@/components/ui/icons/InstagramIcon.vue'

// Prop para decirle al layout que use el modo simple
const simpleLayout = true
</script>

<template>  
  
    <!-- Fondo -->
    <div class="relative h-screen w-full overflow-hidden">
      <img
        :src="HeroKeyBackground"
        class="absolute w-full h-full object-cover brightness-70"
        alt="Background"
      />

      <!-- Contenido principal -->
      <div class="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-8">
        <div class="max-w-6xl w-full space-y-6 bg-gradient-to-b from-cyan-900 to-cyan-950 p-4 sm:p-12 rounded-2xl">
          <div class=" flex justify-center">
            <h1 class="text-2xl sm:text-5xl md:text-6xl font-bold md:mb-10 text-white text-center">
            Contacto 
            </h1>
          </div>

          <div class="relative max-w-6xl w-full space-y-8 bg-cyan-800/30 p-4 sm:p-10 rounded-2xl">
            <!-- Contenedor de dos columnas -->
            <div class="relative grid grid-cols-1 md:grid-cols-2  text-white text-md md:text-lg md:leading-8">

              <!-- Columna izquierda -->
              <div class="space-y-2 md:px-11">
                <!-- Showroom Recoleta -->
                <div class="flex gap-3 mb-4">
                  <h3 class="text-xl sm:text-2xl font-semibold">Showroom Recoleta</h3>
                </div>
                <p class="text-cyan-200"> - Av. Santa Fe 3253</p>
                <p class="text-cyan-200 mb-10 sm:mb-6"> - Lunes a viernes, 10 hs a 18 hs</p>
                <!-- Showroom City Bell -->
                <div class="flex items-center gap-3 mb-4">
                  <h3 class="text-xl sm:text-2xl font-semibold">Showroom City Bell</h3>
                </div>
                <p class="text-cyan-200"> - Cantilo 265</p>
                <p class="text-cyan-200 mb-10 sm:mb-1"> - Lunes a sábados, 10 hs a 19 hs</p>

              </div>

              <!-- Columna derecha -->
              <div class="space-y-4 md:ps-11 md:leading-11">
                <div class="flex items-center gap-3 mb-4 sm:mb-6">
                  <h3 class="text-xl sm:text-2xl font-semibold">Contacto directo</h3>
                </div>
                <p class="text-cyan-200 text-sm sm:text-xl">WhatsApp: <a href="https://wa.me/5491123456789" target="_blank" class="">+54 9 11 2345 6789</a></p>
                <p class="text-cyan-200 text-sm sm:text-xl">Email: <a href="mailto:contacto@kangaru.store" class="text-yellow-100">contacto@kangaru.store</a></p>
                <p class="text-cyan-200 text-md sm:text-2xl mb-3"><a href="https://instagram.com/kangaru" target="_blank" class="text-yellow-100 flex items-center gap-2 mt-2"><InstagramIcon class="w-4 h-4" />@kangaru</a></p>
              </div>

              <!-- Línea divisora centrada en desktop -->
              <div class="divider-center"></div>
            </div>
          </div>

          <!-- Botón para volver al inicio -->
          <div class="text-center md:mt-20">
            <router-link
              to="/"
              class="inline-block text-sm px-4 py-2 bg-cyan-800 hover:bg-cyan-700 text-white font-bold rounded-lg transition-colors duration-300"
            >
              Volver al inicio
            </router-link>
          </div>
        </div>
      </div>
    </div>
  
</template>

<style>
@media (min-width: 768px) {
  .divider-center::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 1px;
    background: linear-gradient(
      to bottom,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
  }
}
</style>
