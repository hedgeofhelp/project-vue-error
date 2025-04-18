
<template>
  <div class="user-list">
    <h2>👥 Lista użytkowników:</h2>
    <div class="cards">
      <div v-for="user in users" :key="user.id" class="user-card">
        <p class="name">{{ user.name }}</p>
        <p class="email">{{ user.email }}</p>
      </div>
    </div>
  </div>
</template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { setError } from '../stores/errorState'
  
  interface User {
    id: number
    name: string
    email: string
  }
  
  const users = ref<User[]>([])
  
  onMounted(async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
      users.value = await res.json()
    } catch (err) {
        setError('Nie udało się pobrać użytkowników.')
        console.error(err)
    }
  })
  </script>
  <style scoped>
  .user-list {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    color: #f1f1f1;
  }
  
  h2 {
    font-size: 1.8rem;
    text-align: center;
    margin-bottom: 1.5rem;
  }
  
  .cards {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
  
  .user-card {
    background-color: #1e1e1e;
    padding: 1rem 1.5rem;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
    transition: transform 0.2s ease;
  }
  
  .user-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
  }
  
  .name {
    font-weight: 600;
    font-size: 1.1rem;
  }
  
  .email {
    font-size: 0.95rem;
    color: #ccc;
  }
  </style>