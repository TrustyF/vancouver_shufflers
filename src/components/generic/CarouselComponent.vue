<script setup>
import {ref, computed, onMounted, onBeforeMount} from "vue";
import {log_event} from "@/scripts/log_events.js";
import ShoeLoader from "@/components/generic/ShoeLoader.vue";

const images = import.meta.glob('@/assets/carousel_images/*.jpg', {eager: true})
let image_paths = ref((Object.values(images).map(m => m.default)))

console.log(image_paths)

let img_index = ref(0)
let interval_ref
let restart_timeout_ref

function move_slide(amount, manual = false) {

  let arr_len = image_paths.value.length

  if (manual) {

    clearInterval(interval_ref)

    if (!restart_timeout_ref) restart_timeout_ref = setTimeout(() => {

      startSlideshow();
      restart_timeout_ref = undefined

    }, 5000)
  }

  img_index.value += amount;

  if (img_index.value < 0) img_index.value = arr_len - 1
  if (img_index.value > arr_len - 1) img_index.value = 0

}

const startSlideshow = () => {
  interval_ref = setInterval(() => move_slide(1), 5000);
};

function handle_arrow_nav(amount) {
  move_slide(amount, true)
  log_event('image_nav', 'nav', img_index.value)
}

onMounted(() => {
  startSlideshow()
})

</script>

<template>
  <div class="image_frame">

    <transition name="fade" mode="in-out">
        <img class="carousel_img" :src="image_paths[img_index]" :key="img_index" alt=""/>
    </transition>

    <div class="arrow_nav">
      <div class="arrow bi-arrow-left" @click="handle_arrow_nav(-1)"></div>
      <div class="arrow right bi-arrow-right" @click="handle_arrow_nav(1)"></div>
    </div>

    <shoe-loader/>

  </div>
</template>

<style scoped>


.image_frame {
  width: 100%;
  aspect-ratio: 1.75;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
}

.carousel_img {
  width: 100%;
  height: 100%;

  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  transition: opacity 1000ms ease;
}

.fade-enter-from {
  opacity: 0;
}

.fade-leave-to {
  opacity: 0;
}

.arrow_nav {
  display: flex;
  flex-flow: row nowrap;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  justify-content: space-between;
  align-items: center;
  align-content: center;
}

.arrow {
  display: flex;
  flex-flow: row nowrap;

  align-items: center;
  cursor: pointer;
  top: 50%;
  width: 10%;
  height: 100%;
  font-size: 2em;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0);
  transition: 200ms ease;
}

.arrow:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.right {
  justify-content: flex-end;
}

@media only screen and (max-width: 1000px) {
  .arrow {
    width: 15%;
  }
}

@media only screen and (max-width: 660px) {
  .arrow {
    width: 20%;
  }
}
</style>