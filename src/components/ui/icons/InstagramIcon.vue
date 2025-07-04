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
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="w-5 h-5"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 13.1a4 4 0 1 1-4.75-4.75 4 4 0 0 1 4.75 4.75z" />
    <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
  </svg>
</template>


