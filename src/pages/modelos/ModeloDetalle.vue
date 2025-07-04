<script setup>
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'
import { modelos } from '@/data/modelos'
import { ArrowLeft, Cart, Battery, Shield, Ram } from '@/components/ui/icons'

const route = useRoute()
const router = useRouter()

const modeloId = route.params.id
const modeloData = computed(() => modelos.find(m => m.id === modeloId))

const modelosNuevos = ['iphone-15-pro', 'huawei-p50-pro', 'samsung-s25-ultra']
</script>

<template>
    <main class="bg-gradient-to-b from-cyan-900 to-cyan-950 text-white min-h-screen">
      <div v-if="modeloData" class="container mx-auto px-4 py-32">
        <router-link to="/#modelos" class="inline-flex items-center gap-2 mb-8 text-cyan-300 hover:text-white transition-colors">
          <ArrowLeft class="w-6 h-6" />
          Volver al listado
        </router-link>

        <div class="grid lg:grid-cols-2 gap-1 items-center">
          <div class="relative group">
            <img 
              :src="modeloData.imagen" 
              :alt="modeloData.nombre"
              class="relative w-full max-w-lg mx-auto rounded-2xl shadow-xl"
            />
          </div>

          <div class="space-y-8">
            <div>
              <span
                v-if="modelosNuevos.includes(modeloData.id)"
                class="inline-block px-3 py-1 mb-4 text-sm font-semibold text-cyan-900 bg-cyan-300 rounded-full"
              >
                Nuevo Modelo
              </span>
              <h1 class="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                {{ modeloData.nombre }}
              </h1>
              <p class="text-xl text-cyan-100">{{ modeloData.descripcion }}</p>
            </div>

            <div class="space-y-6">
              <h3 class="text-3xl font-semibold flex items-center gap-2">
                <Shield class="w-6 h-6" />
                Especificaciones
              </h3>

              <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li
                  v-for="(value, key) in modeloData.especificaciones"
                  :key="key"
                  class="flex items-start gap-3 p-4 bg-cyan-800/40 rounded-xl backdrop-blur-sm"
                >
                  <span class="shrink-0 p-2 bg-cyan-700 rounded-lg">
                    <Screen v-if="key === 'pantalla'" class="w-5 h-5" />
                    <Storage v-else-if="key === 'almacenamiento'" class="w-5 h-5" />
                    <Ram v-else-if="key === 'ram'" class="w-5 h-5" />
                    <Battery v-else-if="key === 'bateria'" class="w-5 h-5" />
                  </span>
                  <div>
                    <h4 class="font-medium text-cyan-200">{{ key.charAt(0).toUpperCase() + key.slice(1) }}</h4>
                    <p class="text-white">{{ value }}</p>
                  </div>
                </li>
              </ul>
            </div>

            <router-link
              :to="`/comprar/${modeloData.id}`"
              class="mt-12 w-full sm:max-w-76 md:max-w-92 lg:max-w-76 px-10 py-4 bg-cyan-600 text-white font-bold rounded-xl hover:bg-cyan-700 transition-all flex items-center justify-center gap-2"
            >
              <Cart class="w-5 h-5" />
              Comprar ahora
            </router-link>
          </div>
        </div>
      </div>

      <div v-else class="text-center py-20">
        <h2 class="text-3xl font-bold mb-4">Modelo no encontrado</h2>
        <router-link to="/#modelos" class="text-cyan-300 hover:text-white transition-colors inline-flex items-center gap-1">
          <ArrowLeft class="w-5 h-5" />
          Volver al listado
        </router-link>
      </div>
    </main>
</template>
