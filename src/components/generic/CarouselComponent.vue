<script setup>
import {ref, computed, onMounted, onBeforeMount} from "vue";

let image_paths = computed(() => {
  let array = []
  for (let i = 0; i < 10; i++) {
    array.push(new URL(`/src/assets/pictures/pic_${i}.webp`, import.meta.url))
  }

  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array
})

let img_index = ref(0)

const startSlideshow = () => {
  setInterval(() => {

    img_index.value += 1;
    if (img_index.value >= image_paths.value.length) img_index.value = 0

  }, 4000);
};

onMounted(() => {
  startSlideshow()
})

</script>

<template>
  <div class="image_frame">
      <transition-group name="fade">
        <img :src="image_paths[img_index]" loading="lazy" :key="img_index" alt="Fading Image"/>
      </transition-group>
  </div>
</template>

<style scoped>


.image_frame {
  width: 100%;
  aspect-ratio: 1.75;
  position: relative;
}

.image_frame img {
  width: 100%;
  height: 100%;
  border-radius: 10px;

  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  transition: opacity 2000ms ease-in-out;
}

.fade-enter-from {
  opacity: 0;
}

.fade-leave-to {
  opacity: 0;
}


</style>