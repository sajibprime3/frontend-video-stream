<template>
  <div class="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
    <div class="flex flex-col" v-for="video in videos" :key="video.uuid">
      <div class="group relative bg-[#2a2a2a2a] rounded-2xl cursor-pointer" @click="goToPlayer(video.uuid)">
        <!-- video preview as before -->
        <video class="w-full h-full aspect-video rounded-2xl object-cover" :poster="getThumbnailUrl(video.uuid)"
          preload="none" muted loop playsinline @mouseenter="playPreview($event, video.uuid)"
          @mouseleave="stopPreview($event)"></video>
      </div>
      <div class="flex flex-col justify-between w-full grow-1">
        <div class="">
          {{ video.title }}
        </div>
        <div class="text-xs">
          Uploaded by <span class="text-white font-bold">@{{ getUploaderUsername(video.uploadedBy) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const videos = ref([])
const users = ref([])
const router = useRouter()

onMounted(async () => {
  const res = await fetch('/video')
  videos.value = await res.json()
  const res2 = await fetch("/userservice/api/v1/users")
  users.value = await res2.json()
})

function getUploaderUsername(userId) {
  for (let index = 0; index < users.value.length; index++) {
    const element = users.value[index];
    if (userId == element.id) {
      return element.username
    }
  }
}

function goToPlayer(uuid) {
  console.log(uuid)
  router.push({ name: 'Watch', params: { uuid } })
}

function getThumbnailUrl(uuid) {
  return `/playback/${uuid}/thumbnail`
}

function playPreview(event, uuid) {
  const video = event.target
  video.src = "/playback/" + uuid + "/preview"
  video.play()
}

function stopPreview(event) {
  const video = event.target
  video.pause()
  video.currentTime = 0
  video.src = ''
}
</script>
