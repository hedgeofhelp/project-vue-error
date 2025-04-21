<template>
  <div class="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-lg mt-10">
    <h2 class="text-2xl font-bold mb-4 text-gray-800">The list of users:</h2>
    <ul class="list-none space-y-3">
      <li
        v-for="user in users"
        :key="user.id"
        class="p-4 bg-blue-50 rounded-xl border border-blue-100 hover:bg-blue-100 transition"
      >
        <p class="text-lg text-blue-900">{{ user.name }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useFetch } from '@vueuse/core'
import { computed } from 'vue'
import { setError } from '../stores/errorState'

interface User {
  id: number
  name: string
  email: string
}

const { data, error } = useFetch<User[]>(
  'https://jsonplaceholder.typicode.com/users'
).get().json()

const users = computed(() => data.value || [])

if (error.value) {
  setError('Failed to download users')
}
</script>
