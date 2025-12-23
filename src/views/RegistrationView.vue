<template>

  <div class="flex justify-center mt-24">
    <div id="registration-form"
      class="flex flex-col items-center justify-center gap-4 p-2 bg-[#23252e] shadow rounded-xl w-96">
      <div class="flex  text-4xl font-bold text-green-700 drop-shadow shadow-blue-800">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3ZM5 1C2.79086 1 1 2.79086 1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5Z"
            fill="#005a55" />
          <path d="M16 12L10 16.3301V7.66987L16 12Z" fill="#ff0000" />
        </svg>
        iTube
      </div>
      <div class="m-2 text-sm">Create an Account and start sharing.</div>
      <div class="flex flex-col w-11/12 gap-4">
        <div class="relative flex items-center ">
          <input type="text" v-model="username" id="username" name="username"
            class="w-full p-2 border border-gray-200 rounded-xl focus:border-emerald-700 focus:outline-none peer"
            placeholder=" ">
          <label for="username"
            class="absolute px-1 text-xs text-teal-600 duration-100 -translate-y-5 bg-[#23252e] rounded border-x left-4 peer-focus:border-emerald-700 peer-placeholder-shown:text-gray-200 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:bg-inherit peer-placeholder-shown:px-0 peer-placeholder-shown:border-none peer-placeholder-shown:left-3">Username</label>

        </div>

        <div class="relative flex items-center ">
          <input type="text" v-model="email" id="email" name="email"
            class="w-full p-2 border border-gray-200 rounded-xl focus:border-emerald-700 focus:outline-none peer"
            placeholder=" ">
          <label for="email"
            class="absolute px-1 text-xs text-teal-600 duration-100 -translate-y-5 bg-[#23252e] rounded border-x left-4 peer-focus:border-emerald-700 peer-placeholder-shown:text-gray-200 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:bg-inherit peer-placeholder-shown:px-0 peer-placeholder-shown:border-none peer-placeholder-shown:left-3">Email</label>

        </div>
        <div class="relative flex items-center ">
          <input type="password" v-model="password" id="password" name="password"
            class="w-full p-2 border border-gray-200 rounded-xl focus:border-emerald-700 focus:outline-none peer"
            placeholder=" ">
          <label for="password"
            class="absolute px-1 text-xs text-teal-600 duration-100 -translate-y-5 bg-[#23252e] rounded border-x left-4 peer-focus:border-emerald-700 peer-placeholder-shown:text-gray-200 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:bg-inherit peer-placeholder-shown:px-0 peer-placeholder-shown:border-none peer-placeholder-shown:left-3">Password</label>

        </div>
        <button @click="register()" class="p-1 font-bold text-white bg-emerald-700 rounded-xl hover:bg-emerald-600">
          Register
        </button>
      </div>
      <div class="flex justify-between w-11/12">
        <router-link to="/login"
          class="p-2 font-mono text-sm font-medium duration-75 hover:drop-shadow hover:-translate-y-1">
          Login
        </router-link>
        <a href="" class="p-2 font-mono text-sm font-medium duration-75 hover:drop-shadow hover:-translate-y-1">
          Need Help?
        </a>
      </div>
    </div>

    <div id="success-msg"
      class="hidden flex-col items-center justify-evenly gap-4 p-2 bg-[#23252e] shadow rounded-xl w-96">
      <div class="flex text-4xl font-bold text-green-700 drop-shadow shadow-blue-800">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3ZM5 1C2.79086 1 1 2.79086 1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5Z"
            fill="#005a55" />
          <path d="M16 12L10 16.3301V7.66987L16 12Z" fill="#ff0000" />
        </svg>
        iTube
      </div>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 512 512">
          <path fill="#32BEA6"
            d="M504.1,256C504.1,119,393,7.9,256,7.9C119,7.9,7.9,119,7.9,256C7.9,393,119,504.1,256,504.1C393,504.1,504.1,393,504.1,256z">
          </path>
          <path fill="#FFF"
            d="M392.6,172.9c-5.8-15.1-17.7-12.7-30.6-10.1c-7.7,1.6-42,11.6-96.1,68.8c-22.5,23.7-37.3,42.6-47.1,57c-6-7.3-12.8-15.2-20-22.3C176.7,244.2,152,229,151,228.4c-10.3-6.3-23.8-3.1-30.2,7.3c-6.3,10.3-3.1,23.8,7.2,30.2c0.2,0.1,21.4,13.2,39.6,31.5c18.6,18.6,35.5,43.8,35.7,44.1c4.1,6.2,11,9.8,18.3,9.8c1.2,0,2.5-0.1,3.8-0.3c8.6-1.5,15.4-7.9,17.5-16.3c0.1-0.2,8.8-24.3,54.7-72.7c37-39.1,61.7-51.5,70.3-54.9c0.1,0,0.1,0,0.3,0c0,0,0.3-0.1,0.8-0.4c1.5-0.6,2.3-0.8,2.3-0.8c-0.4,0.1-0.6,0.1-0.6,0.1l0-0.1c4-1.7,11.4-4.9,11.5-5C393.3,196.1,397,184.1,392.6,172.9z">
          </path>
        </svg>
      </div>
      <div>Account Created Successfully.</div>
      <router-link to="/login" class="p-1 px-8  font-bold text-white bg-emerald-700 rounded-xl hover:bg-emerald-600">
        Login
      </router-link>
    </div>
  </div>
</template>
<script setup>

import { ref } from 'vue'

const username = ref('')
const password = ref('')
const email = ref('')
const message = ref('')

async function register() {
  message.value = ''

  const res = await fetch('/userservice/api/v1/users', {
    method: 'POST',
    credentials: 'include', // REQUIRED for HttpOnly cookies
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: username.value,
      email: email.value,
      password: password.value
    })
  })

  if (res.ok) {
    hide("#registration-form", "flex", "hidden")
    show("#success-msg", "flex", "hidden")
  }
}

function show(target, showClass, hideClass) {
  const nodes = document.querySelectorAll(target);
  nodes.forEach(node => {
    node.classList.remove(hideClass);
    node.classList.add(showClass);
  });
}

function hide(target, showClass, hideClass) {
  const nodes = document.querySelectorAll(target);
  nodes.forEach(node => {
    node.classList.remove(showClass);
    node.classList.add(hideClass);
  });
}
</script>
