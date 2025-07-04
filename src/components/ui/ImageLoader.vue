<script setup>
import { ref } from 'vue'

const props = defineProps({
  src: String,
  preview: String,
  alt: String,
  customClass: String
})

const loaded = ref(false)
</script>

<template>
  <div class="relative overflow-hidden">
    <img
      :src="preview"
      :alt="alt"
      class="absolute inset-0 w-full h-full object-contain scale-105 transition-opacity"
      :style="{ opacity: loaded ? 0 : 1 }"
    />
    <img
      :src="src"
      :alt="alt"
      :class="[props.customClass, 'transition-opacity duration-400']"
      @load="loaded = true"
      :style="{ opacity: loaded ? 1 : 0 }"
    />
  </div>
</template>

