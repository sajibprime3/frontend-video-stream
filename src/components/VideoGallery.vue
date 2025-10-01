<template>
  <div class="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
    <div v-for="video in videos" :key="video.id" class="group relative bg-[#2a2a2a2a] rounded-2xl cursor-pointer"
      @click="goToPlayer(video.id)">
      <!-- video preview as before -->
      <video class="w-full h-full aspect-video rounded-2xl object-cover" :poster="getThumbnailUrl(video.id)"
        preload="none" muted loop playsinline @mouseenter="playPreview($event, video.preview.id)"
        @mouseleave="stopPreview($event)"></video>
      <div class="mt-2 text-sm text-center">{{ video.title }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const videos = ref([])
const router = useRouter()

onMounted(async () => {
  const res = await fetch('/video/info')
  videos.value = await res.json()
})

function goToPlayer(id) {
  console.log(id)
  router.push({ name: 'Watch', params: { id } })
}

function getThumbnailUrl(id) {
  return `/video/${id}/thumbnail`
}

function playPreview(event, url) {
  const video = event.target
  video.src = "/video/preview/" + url
  video.play()
}

function stopPreview(event) {
  const video = event.target
  video.pause()
  video.currentTime = 0
  video.src = ''
}
</script>
