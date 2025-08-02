<template>
  <video class="w-full aspect-video rounded-2xl" :src="props.src" controls autoplay></video>
</template>

<script setup>
const props = defineProps({
  src: String
})

console.log('stream src received in player:', props.src)
</script>
