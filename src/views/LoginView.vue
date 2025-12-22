<template>
  <div class="flex">
    <div class="max-w-2xs mx-auto my-8 p-2">
      <h2>Login</h2>

      <input class="block w-full mb-2" v-model="username" placeholder="Username" autocomplete="username" />

      <input class="block w-full mb-2" v-model="password" type="password" placeholder="Password"
        autocomplete="current-password" />

      <div>
        <button class="mr-2" @click="login">Login</button>
        <button @click="me">Who am I?</button>
        <button @click="logout">Logout</button>
      </div>

      <p class="mt-4">{{ message }}</p>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const username = ref('')
const password = ref('')
const message = ref('')

async function login() {
  message.value = ''

  const res = await fetch('/userservice/api/v1/auth/login', {
    method: 'POST',
    credentials: 'include', // REQUIRED for HttpOnly cookies
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: username.value,
      password: password.value
    })
  })

  message.value = res.ok ? 'Logged in' : 'Login failed'
}

async function me() {
  const res = await fetch(`${API}/api/me`, {
    credentials: 'include'
  })

  message.value = res.ok
    ? await res.text()
    : 'Not authenticated'
}

async function logout() {
  await fetch(`${API}/auth/logout`, {
    method: 'POST',
    credentials: 'include'
  })

  message.value = 'Logged out'
}
</script>

<style scoped></style>
