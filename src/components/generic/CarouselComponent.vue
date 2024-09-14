<script setup>
import {ref, computed, onMounted, onBeforeMount} from "vue";
import {openNewTab} from "@/scripts/helpers.js";

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

    <div @click="openNewTab('https://www.instagram.com/yvrshufflers/')" class="insta_bg">
      <p class="bi-instagram insta_btn">𝐘𝐕𝐑 𝐒𝐇𝐔𝐅𝐅𝐋𝐄𝐑𝐒</p>
    </div>

    <transition-group name="fade">
      <img :src="im" v-for="(im,index) in image_paths" v-show="index===img_index" :key="im" alt="Fading Image"/>
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
.insta_bg {
  margin: 10px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
  border-radius: 30px;
  padding: 2px;
  background-image: linear-gradient(to left top, rgb(131, 58, 180), rgb(253, 29, 29), rgb(252, 176, 69));
}
.insta_btn {
  display: flex;
  flex-flow: row;
  gap: 5px;
  justify-items: center;
  align-items: center;
  text-transform: uppercase;
  cursor: pointer;
  font-weight: 400;
  font-size: 0.8em;
  padding: 10px;
  border-radius: 30px;
  height: 30px;
  background-color: rgba(0,0,0,0.8);
  transition: 100ms ease-in-out;
}
.insta_btn:hover {
  background-color: rgba(0, 0, 0, 0.5);
}

.fade-enter-from {
  opacity: 0;
}

.fade-leave-to {
  opacity: 0;
}


</style>