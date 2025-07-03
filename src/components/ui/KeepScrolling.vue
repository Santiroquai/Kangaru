<template>
  <KeepScrollingIcon class="w-auto h-auto animate-bounce-pulse text-cyan-800" />
</template>

<script setup>
import KeepScrollingIcon from '@/assets/keep-scrolling.svg?component'
</script>

<style scoped>
@keyframes bounce-pulse {
  0% { transform: translateY(0) scale(0.8); opacity: 0.8; }
  50% { transform: translateY(-5px) scale(1); opacity: 1; }
  100% { transform: translateY(0) scale(0.8); opacity: 0.8; }
}
.animate-bounce-pulse {
  animation: bounce-pulse 2s ease-in-out infinite;
}
</style>
