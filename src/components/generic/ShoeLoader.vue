<script setup>
import {inject, onMounted, watch, ref, computed} from "vue";

let props = defineProps({
  test: {
    type: String,
    default: null,
  },
});
let emits = defineEmits(["test"]);
const curr_api = inject("curr_api");

</script>

<template>
  <div class="loader_wrapper">
    <img src="/src/assets/icons/shoe_small.webp" class="load_img" alt="">
    <img src="/src/assets/icons/shoe_small.webp" class="load_img offset" alt="">
  </div>
</template>

<style scoped>
.loader_wrapper {
  position: absolute;
  z-index: -1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #282828;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
}

.load_img {
  /*outline: 1px solid;*/
  position: absolute;
  height: 7%;
  min-height: 25px;
  aspect-ratio: 1;
  object-fit: contain;
  filter: invert();
  animation: bobbing 1500ms cubic-bezier(0,0.8,0.2,1) infinite;
  /*animation: bobbing 2000ms linear infinite;*/
}
.offset {
  animation-delay: calc(1500ms/2);
  opacity: 0.25;
}

@keyframes bobbing {
  0% {
    transform: translate(-75%, 0) rotate(-40deg);
  }
  25% {
    transform: translate(40%, -75%) rotate(10deg);
  }
  50% {
    transform: translate(50%, 0) rotate(-40deg);
  }
  75% {
    transform: translate(-25%, 0) rotate(-40deg);
  }
  100% {
    transform: translate(-75%, 0) rotate(-40deg);
  }
}
</style>