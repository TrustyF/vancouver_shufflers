<script setup>
import {ref, computed} from "vue";

let current_slide = ref(0)

let image_paths = computed(() => {
  let arr = []
  for (let i = 1; i <= 28; i++) {
    arr.push(`/src/assets/pictures/pic_${i}.jpeg`)
  }
  return arr
})

</script>

<template>
  <div>

  </div>
</template>

<style scoped>

</style>