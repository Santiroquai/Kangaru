<script setup>
const props = defineProps({
  class: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    stroke-width="2" 
    stroke-linecap="round" 
    stroke-linejoin="round"
    :class="props.class"
  >
    <rect x="1" y="6" width="18" height="12" rx="2" ry="2"/>
    <line x1="23" y1="13" x2="23" y2="11"/>
  </svg>
</template>
