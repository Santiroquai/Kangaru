<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import HeroKeyLogo from "@/assets/hero-key-logo.webp"
import HeroKeyBackground from "@/assets/hero-key-background.webp"
import K from "@/assets/K.svg"
import MapaRecoleta from '@/assets/mapa-recoleta.webp'
import MapaCityBell from '@/assets/mapa-citybell.webp'
import ModelosList from "@/components/ModelosList.vue"
import LocationIcon from '../components/ui/icons/LocationIcon.vue' 
import ContactIcon from '../components/ui/icons/ContactIcon.vue'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  const tl = gsap.timeline({
    ease: "power2.out",
    scrollTrigger: {
      scrub: 1,
    },
  })

  tl.to("#hero-key", { duration: 1, scale: 1 })
    .to("#hero-key-logo", { opacity: 0 }, "<")
    .to("#hero-footer", { opacity: 0 }, "<")
    .to("#logo-mask", { maskSize: "clamp(65vh, 25%, 30vh)" }, 0.07)
    .to("#hero-key", { opacity: 0, duration: 0.2 }, 0.5)

  gsap.to("#modelos, #footer, #info-circles", {
    opacity: 1,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#modelos",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  })

  gsap.set("#keep-scrolling", { autoAlpha: 1 })

  ScrollTrigger.create({
    trigger: "#footer",
    start: "top bottom",
    end: "top center",
    onEnter: () => {
      gsap.to("#keep-scrolling", {
        autoAlpha: 0,
        duration: 0.5,
        ease: "power2.out",
      })
    },
    onLeaveBack: () => {
      gsap.to("#keep-scrolling", {
        autoAlpha: 1,
        duration: 0.5,
        ease: "power2.out",
      })
    },
  })

  gsap.from("#info-circles .relative", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "back.out",
    scrollTrigger: {
      trigger: "#info-circles",
      start: "top 80%",
      toggleActions: "play none none none",
    }
  });
})
</script>

<template>

    <div class="relative h-[600vh] sm:h-[560vh]">
      <!-- Hero Section -->
      <div id="logo-mask" class="fixed top-0 w-full h-screen">
        <section>
          <picture
            id="hero-key"
            class="h-screen scale-100 block overflow-hidden sm:scale-110 "
          >
            <img
              id="hero-key-logo"
              :src="HeroKeyLogo"
              class="absolute object-cover w-full h-full drop-shadow-lg"
              alt="Hero Key Logo"
            />
            <img
              id="hero-key-background"
              :src="HeroKeyBackground"
              class="w-full h-full object-cover"
              alt="Hero Background"
            />
          </picture>
        </section>
      </div>

      <!-- Header and Footer on Hero -->
      <div class="fixed flex flex-col items-center h-screen px-5 py-5 sm:px-20 sm:py-20 md:px-17 md:py-15 w-full">
        <header class="flex w-full justify-end">
          <router-link to="/nosotros">
            <K class="ml-auto max-w-8 sm:max-w-15 md:max-w-18 transition-colors duration-500 cursor-pointer mb-0 sm:-mb-6" />
          </router-link>
        </header>

        <footer id="hero-footer" class="absolute bottom-16 m-auto">
          <span class="text-cyan-900 text-xl sm:text-2xl md:text-3xl font-bold drop-shadow-l word-spacing-[20px]">
            Stock disponible
          </span>
        </footer>
      </div>

      <!-- Modelos List -->
      <div class="pt-[345vh] sm:pt-[320vh]" id="modelos">
        <ModelosList />
      </div>


      <!-- Footer con info círculos -->
      <div class="absolute bottom-0 w-full">
        <section id="info-circles" class="opacity-0 px-3 sm:px-10 md:px-60 lg:px-87 pb-8 lg:pb-43">
          <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 max-w-42 lg:max-w-3xl">
            <!-- Recoleta -->
            <div class="relative bg-cyan-900/70 backdrop-blur-sm rounded-full p-6 aspect-square flex flex-col items-center justify-center border-2 border-cyan-500/30 hover:border-yellow-200 transition-all duration-300 overflow-hidden">
              <img :src="MapaRecoleta" alt="Mapa Recoleta" class="absolute w-full h-full object-cover opacity-30" />
              <div class="relative z-10 flex flex-col items-center">
                <LocationIcon />
                <h3 class="text-md font-bold text-center text-white mb-1">RECOLETA</h3>
                <p class="text-sm text-center text-cyan-200">Av. Santa Fe 3253</p>
              </div>
            </div>

            <!-- City Bell -->
            <div class="relative bg-cyan-900/70 backdrop-blur-sm rounded-full p-6 aspect-square flex flex-col items-center justify-center border-2 border-cyan-500/30 hover:border-yellow-200 transition-all duration-300 overflow-hidden">
              <img :src="MapaCityBell" alt="Mapa City Bell" class="absolute w-full h-full object-cover opacity-30" />
              <div class="relative z-10 flex flex-col items-center">
                <LocationIcon />
                <h3 class="text-md font-bold text-center text-white mb-1">CITY BELL</h3>
                <p class="text-sm text-center text-cyan-200">Cantilo 265</p>
              </div>
            </div>

            <!-- Contacto -->
            <div class="relative bg-cyan-700/50 backdrop-blur-sm rounded-full p-6 aspect-square flex flex-col items-center justify-center border-2 border-cyan-500/30 hover:border-yellow-200 transition-all duration-300 overflow-hidden">
              <ContactIcon />
              <h3 class="text-md font-bold text-center text-white mb-1">CONTACTO</h3>
              <p class="text-sm text-center text-cyan-200">@kangaru</p>
            </div>
          </div>
        </section>

        <!-- Footer texto -->
        <section id="footer">
          <div class="bg-cyan-800 py-3 sm:py-5 md:py-6">
            <h2 class="text-4xl md:text-7xl font-bold text-center text-yellow-100">KANGARU</h2>
            <h2 class="text-xl md:text-2xl font-bold text-center text-yellow-100">STORE</h2>
          </div>
        </section>
      </div>
    </div>
  
</template>

<style>
#logo-mask {
  background: white;
  mask-image: url("/logo-stack.svg");
  mask-position: 51% 15%;
  mask-repeat: no-repeat;
  mask-size: clamp(3300vh, 1600%, 0vh);
}

@media (max-width: 390px) {
  #logo-mask {
    background: white;
    mask-image: url("/logo-stack.svg");
    mask-position: 31% 22%;
    mask-repeat: no-repeat;
    mask-size: clamp(2000vh, 1000%, 0vh);
  }
}

#info-circles .relative {
  transform-origin: center;
  will-change: transform;
  transition: box-shadow 0.3s ease;
}
</style>
