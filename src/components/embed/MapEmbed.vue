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

let google_api = import.meta.env.VITE_GOOGLE_MAP_API


</script>

<template>
  <iframe
        title="google_maps"
          height="450"
          style="border:0;width: 100%"
          loading="lazy"
          allowfullscreen
          referrerpolicy="no-referrer-when-downgrade"
          :src="`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJEyBekX9xhlQRUlReRspXBtI&key=${google_api}`">
  </iframe>
</template>

<style scoped>

</style>