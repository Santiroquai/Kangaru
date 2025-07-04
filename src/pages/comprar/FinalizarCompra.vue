<script setup>
import { useRoute, useRouter } from 'vue-router';
import { modelos } from '@/data/modelos';
import { ArrowLeft } from '@/components/ui/icons'
import BuyIcon from '../../components/ui/icons/BuyIcon.vue';

const route = useRoute();
const router = useRouter();
const modeloId = route.params.modelo;
const modeloData = modelos.find((m) => m.id === modeloId);

// Redirige si el modelo no existe
if (!modeloData) {
  console.warn('Modelo no encontrado, redirigiendo...');
  router.replace('/');
}

// Manejo del formulario
function enviarFormulario(e) {
  alert('¡Gracias por tu compra! Nos contactaremos contigo para finalizar el proceso.');
}
</script>

<template>
    <main class="min-h-screen bg-gradient-to-b from-cyan-900 to-cyan-950 text-white">
      <div class="container mx-auto px-4 py-8 sm:py-25">
        <div class="flex justify-between items-center mb-12">
          <RouterLink
            :to="`/modelos/${modeloData.id}`"
            class="inline-flex items-center gap-2 text-cyan-300 hover:text-white transition-colors"
          >
            <ArrowLeft class="w-6 h-6" />
            Volver al modelo
          </RouterLink>
        </div>

        <div class="grid lg:grid-cols-2 mx-6 lg:mx-24 gap-12 items-start">
          <!-- Resumen -->
          <div class="bg-gray-100 text-cyan-800 rounded-2xl p-8 backdrop-blur-sm">
            <h3 class="text-2xl font-bold mb-6">Tu Pedido</h3>
            <div class="flex items-start gap-6 mb-8">
              <img :src="modeloData.imagen" :alt="modeloData.nombre" class="w-32 h-32 object-contain rounded-lg" />
              <div>
                <h4 class="text-xl font-bold">{{ modeloData.nombre }}</h4>
                <p class="text-cyan-700 mb-2">{{ modeloData.descripcion }}</p>
                <p class="text-lg font-semibold">
                  {{ modeloData.precio ? `$${modeloData.precio}` : 'Consultar' }}
                </p>
              </div>
            </div>

            <div class="space-y-4">
              <div class="flex justify-between border-b border-cyan-700 pb-2">
                <span>Subtotal</span>
                <span>{{ modeloData.precio ? `$${modeloData.precio}` : 'Consultar' }}</span>
              </div>
              <div class="flex justify-between border-b border-cyan-700 pb-2">
                <span>Envío</span>
                <span>Gratis</span>
              </div>
              <div class="flex justify-between text-xl font-bold pt-2">
                <span>Total</span>
                <span>{{ modeloData.precio ? `$${modeloData.precio}` : 'Consultar' }}</span>
              </div>
            </div>
          </div>

          <!-- Formulario -->
          <div class="bg-gray-100 text-cyan-800 rounded-2xl p-8 backdrop-blur-sm">
            <h3 class="text-2xl font-bold mb-6">Datos de Contacto</h3>

            <form class="space-y-4 lg:space-y-6" @submit.prevent="enviarFormulario">
              <div>
                <label for="nombre" class="block text-sm font-medium mb-1">Nombre completo</label>
                <input id="nombre" required class="w-full bg-black/10 border rounded-lg px-4 py-2 lg:py-3" />
              </div>

              <div>
                <label for="email" class="block text-sm font-medium mb-1">Email</label>
                <input type="email" id="email" required class="w-full bg-black/10 border rounded-lg px-4 py-2 lg:py-3" />
              </div>

              <div>
                <label for="telefono" class="block text-sm font-medium mb-1">Teléfono</label>
                <input type="tel" id="telefono" required class="w-full bg-black/10 border rounded-lg px-4 py-2 lg:py-3" />
              </div>

              <div>
                <label for="direccion" class="block text-sm font-medium mb-2">Dirección (opcional)</label>
                <input id="direccion" class="w-full bg-black/10 border rounded-lg px-4 py-2 lg:py-3" />
              </div>

              <button
                type="submit"
                class="w-full py-3 mt-7 sm:py-4 sm:mt-9 bg-cyan-700 hover:bg-cyan-800 text-white font-bold rounded-xl flex items-center justify-center gap-2"
              >
                <BuyIcon />
                Confirmar Compra
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
</template>
