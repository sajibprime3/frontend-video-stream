<template>
  <div class="flex">
    <div class="max-w-2xs mx-auto my-8 p-2">
      <h2>Login</h2>

      <input class="block w-full mb-2" v-model="username" placeholder="Username" autocomplete="username" />

      <input class="block w-full mb-2" v-model="password" type="password" placeholder="Password"
        autocomplete="current-password" />

      <div class="flex ">
        <button class="mr-2 p-2 px-4 bg-blue-600 font-bold text-white rounded-xl" @click="login">Login</button>
        <button class="ml-auto" @click="me">Who am I?</button>
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
  const res = await fetch('/userservice/api/v1/users/me', {
    credentials: 'include'
  })
  const obj = await res.json()

  message.value = res.ok ? obj.id : 'Not authenticated'
}

</script>

<style scoped></style>
