<script setup>
import K from "@/assets/K.svg"
import HeroKeyBackground from "@/assets/hero-key-background.webp"

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
        <div class="max-w-6xl w-full space-y-8 bg-gradient-to-b from-cyan-900 to-cyan-950 p-6 sm:p-12 rounded-2xl">
          <h1 class="text-2xl sm:text-5xl md:text-6xl font-bold mb-10 md:mb-16 text-white text-center">
            KANGARU STORE
          </h1>

          <div class="relative max-w-6xl w-full space-y-8 bg-cyan-800/40 p-6 sm:p-10 rounded-2xl">
            <!-- Contenedor de dos columnas -->
            <div class="relative grid grid-cols-1 md:grid-cols-2 text-white text-md md:text-lg md:leading-10">
              <!-- Columna izquierda -->
              <div class="space-y-6 md:px-11">
                <p>
                  Somos importadores directos de teléfonos celulares de alta gama, ofreciendo los últimos modelos
                  con garantía internacional y soporte técnico especializado.
                </p>
                <p>
                  Desde 2015, nos hemos posicionado como líderes en el mercado, brindando productos de calidad
                  con los mejores precios.
                </p>
              </div>

              <!-- Columna derecha -->
              <div class="space-y-6 md:ps-11">
                <p>
                  Nuestro catálogo incluye las marcas más prestigiosas del mercado, con dispositivos
                  completamente nuevos, sellados de fábrica.
                </p>
                <p>
                  Todos nuestros productos incluyen accesorios originales y atención personalizada para cada cliente.
                </p>
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

      <!-- Logo K -->
      <router-link to="/" class="absolute z-10 top-4 right-4 sm:top-8 sm:right-8">
        <K class="size-8 sm:size-15 text-white hover:text-yellow-100 transition-colors duration-500" />
      </router-link>
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
