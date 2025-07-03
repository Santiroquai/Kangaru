<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import KeepScrolling from "@/components/ui/KeepScrolling.vue"

const route = useRoute()
const simpleLayout = ref(route.meta?.simpleLayout || false)

watch(
  () => route.meta,
  (meta) => {
    simpleLayout.value = meta?.simpleLayout || false
  },
  { immediate: true }
)
</script>


<template>
  <div :class="['layout-body', { 'simple-layout': simpleLayout }]">
    <router-view />
    <KeepScrolling
      v-if="!simpleLayout"
      id="keep-scrolling"
      class="fixed bottom-5 right-0 left-0 mx-auto text-cyan-800 animate-bounce-pulse"
    />
  </div>
</template>

<style>
.layout-body {
  background: #104e64;
  overflow-x: hidden;
  color: white;
  margin: 0;
  width: 100%;
  height: 560vh;
}
.layout-body.simple-layout {
  height: auto;
}
@media (max-width: 390px) {
  .layout-body:not(.simple-layout) {
    height: 600vh;
  }
}

.page-enter-active, .page-leave-active {
  transition: opacity 0.3s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}

@keyframes bounce-pulse {
  0% { transform: translateY(0) scale(0.8); opacity: 0.8; }
  50% { transform: translateY(-5px) scale(1); opacity: 1; }
  100% { transform: translateY(0) scale(0.8); opacity: 0.8; }
}
.animate-bounce-pulse {
  animation: bounce-pulse 2s ease-in-out infinite;
}
</style>
