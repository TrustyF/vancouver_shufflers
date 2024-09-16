<script setup>
import {ref, computed, onMounted, onBeforeMount} from "vue";

let image_paths = computed(() => {
  let array = []
  for (let i = 0; i <= 11; i++) {
    array.push(`https://firebasestorage.googleapis.com/v0/b/vancouver-shufflers-5d383.appspot.com/o/pictures%2Fpic_${i}.jpg?alt=media&token=78501dd5-d94b-4f84-87b4-30d50d3540ba`)
  }

  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array
})

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

onMounted(() => {
  startSlideshow()
})

</script>

<template>
  <div class="image_frame">

    <transition name="fade">
        <img class="carousel_img" :src="image_paths[img_index]" :key="img_index" alt=""/>
    </transition>

    <div class="arrow_nav">
      <div class="arrow bi-arrow-left" @click="move_slide(-1,true)"></div>
      <div class="arrow right bi-arrow-right" @click="move_slide(1,true)"></div>
    </div>

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