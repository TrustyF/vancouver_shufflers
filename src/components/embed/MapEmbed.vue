<script setup>
import {inject, onMounted, watch, ref, computed} from "vue";
import ShoeLoader from "@/components/generic/ShoeLoader.vue";

let props = defineProps({
  test: {
    type: String,
    default: null,
  },
});
let emits = defineEmits(["test"]);
const curr_api = inject("curr_api");

let google_api = import.meta.env.VITE_GOOGLE_MAP_API


</script>

<template>
  <div class="map_wrapper">
    <iframe class="frame"
        title="google_maps"
        height="800"
        style="border:0;width: 100%"
        loading="lazy"
        allowfullscreen
        referrerpolicy="no-referrer-when-downgrade"
        :src="`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJEyBekX9xhlQRUlReRspXBtI&key=${google_api}`">
    </iframe>
    <div class="placeholder"></div>
    <shoe-loader/>
  </div>
</template>

<style scoped>
.map_wrapper {
  /*outline: 1px solid red;*/
  position: relative;
  width: 100%;
  height: 800px;
  border-radius: 8px;
  overflow: hidden;
  /*filter: invert(.9) saturate(0.5) hue-rotate(145deg);*/
}

.placeholder {
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-color: #fdfdfd;
  /*outline: 1px solid red;*/
}

.frame {
  position: absolute;
  animation: fadein 500ms;
}
</style>