<template>
  <div class="max-w-md mx-auto mt-10 p-6 bg-[#5e5e5e5e] backdrop-filter backdrop-blur-md rounded-2xl shadow-md">
    <h2 class="text-2xl font-bold mb-4 text-center">Upload a Video</h2>

    <form @submit.prevent="handleUpload" class="space-y-4">
      <div>
        <label for="title" class="block text-sm font-medium text-gray-700">Video Title</label>
        <input type="text" id="title" v-model="title" placeholder="Enter a title"
          class="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
      </div>

      <div>
        <label for="video" class="block text-sm font-medium text-gray-700">Select Video</label>
        <input type="file" id="video" accept="video/*" @change="onFileChange"
          class="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
      </div>

      <button type="submit" :disabled="!videoFile || !title || loading"
        class="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 disabled:opacity-50">
        {{ loading ? 'Uploading...' : 'Upload Video' }}
      </button>
    </form>

    <!-- Upload Result -->
    <div v-if="responseData" class="mt-6 bg-gray-100 p-4 rounded-md text-sm">
      <h3 class="font-semibold text-lg mb-2 text-gray-800">Uploaded Video Info:</h3>
      <p><strong>ID:</strong> {{ responseData.id }}</p>
      <p><strong>Title:</strong> {{ responseData.title }}</p>
      <p><strong>File UUID:</strong> {{ responseData.fileUUID }}</p>
      <p><strong>Preview Status:</strong> {{ responseData.preview.status }}</p>
      <p><strong>Preview Name:</strong> {{ responseData.preview.name }}</p>
    </div>

    <!-- Error Message -->
    <div v-if="error" class="mt-4 text-sm text-red-600">
      {{ error }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const title = ref('')
const videoFile = ref(null)
const loading = ref(false)
const error = ref('')
const responseData = ref(null)

function onFileChange(e) {
  videoFile.value = e.target.files[0]
  error.value = ''
}

async function handleUpload() {
  if (!videoFile.value || !title.value) return

  const formData = new FormData()
  formData.append('file', videoFile.value)
  formData.append('title', title.value)

  loading.value = true
  error.value = ''
  responseData.value = null

  try {
    const response = await axios.post('/video', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    responseData.value = response.data
  } catch (err) {
    error.value = err.response?.data?.message || 'Upload failed.'
  } finally {
    loading.value = false
  }
}
</script>
