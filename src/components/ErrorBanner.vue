<template>
    <transition name="fade">
      <div
        v-if="errorState.message"
        class="bg-red-600 text-white px-6 py-4 rounded-2xl shadow-lg flex justify-between items-center animate-fade-in"
      >
        <p class="text-sm font-medium">{{ errorState.message }}</p>
        <button
          @click="clearError"
          class="ml-4 text-white/70 hover:text-white transition-colors duration-200 text-lg font-bold"
          aria-label="Close error"
        >
          ✕
        </button>
      </div>
    </transition>
  </template>
  
  <script setup lang="ts">
  import { errorState, clearError } from '../stores/errorState'
  </script>
  
  <style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }
  </style>
  