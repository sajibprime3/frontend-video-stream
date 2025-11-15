<template>
  <div class="min-h-screen">
    <div class="flex py-6 px-2">
      <h1 class="text-3xl font-bold text-center">Video Gallery</h1>
      <router-link to="/Upload" class="bg-blue-500 rounded-xl p-2 px-4 ml-auto">Upload</router-link>
    </div>
    <VideoGallery />
  </div>
</template>

<script setup>
import VideoGallery from '../components/VideoGallery.vue'
import { useRouter } from 'vue-router';

const router = useRouter()

function goToUploader() {
  router.push({ name: "Upload" })
}

</script>
