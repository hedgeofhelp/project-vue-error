<template>
    <div v-if="errorState.message" class="error-banner">
      <p>{{ errorState.message }}</p>
      <button @click="clearError">X</button>
    </div>
  </template>
  
  <script setup lang="ts">
import { errorState, clearError } from '../stores/errorState'
</script>
  <style scoped>
  .error-banner {
    background-color: #ffcccc;
    color: #900;
    padding: 10px;
    border: 1px solid #900;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  </style>
  