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
    fill="none" 
    stroke="currentColor" 
    stroke-width="2"
    stroke-linecap="round" 
    stroke-linejoin="round" 
    viewBox="0 0 24 24"
    >
    <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"/>
    <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"/>
  </svg>
</template>

