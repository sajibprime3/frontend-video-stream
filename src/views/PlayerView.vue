<template>
  <div v-if="video" class="p-6 space-y-4">
    <!-- pass only stream URL to VideoPlayer -->
    <VideoPlayer :src="streamUrl" />
    <h1 class="text-3xl font-bold">{{ video.title }}</h1>
    <p class="text-gray-500">{{ video.description }}</p>

  </div>

  <div v-else class="p-6 text-center text-gray-400">
    Loading video...
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import VideoPlayer from '../components/VideoPlayer.vue'

const route = useRoute()
const videoId = route.params.uuid

const video = ref(null)
const streamUrl = ref('')

onMounted(async () => {
  try {
    const res = await fetch(`/video/${videoId}`)
    if (!res.ok) throw new Error('Failed to fetch video info')
    video.value = await res.json()

    // assuming stream URL is derived from ID
    // streamUrl.value = `/video/${video.value.fileUUID}`

    streamUrl.value = `/playback/${videoId}`

    // if your video info has a streamPath: use that instead:
    // streamUrl.value = video.value.streamPath
  } catch (err) {
    console.error(err)
  }
})
</script>
