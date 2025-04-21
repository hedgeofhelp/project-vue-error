<template>
  <div class="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-lg mt-10">
    <h2 class="text-2xl font-bold mb-4 text-gray-800">Lista użytkowników</h2>
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
import { ref, onMounted } from 'vue'
import { setError } from '../stores/errorState'
import axios from 'axios'
  
interface User {
  id: number
  name: string
  email: string
}
  
const users = ref<User[]>([])
  
const fetchUsers = async () => {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    users.value = res.data
  } catch (error) {
    setError('Nie udało się pobrać użytkowników')
  }
}

onMounted(fetchUsers)
</script>
