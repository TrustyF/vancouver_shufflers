<script setup>
import {inject, onMounted, watch, ref, computed} from "vue";
import {openNewTab} from "@/scripts/helpers.js";
import ShoeLoader from "@/components/generic/ShoeLoader.vue";

let props = defineProps({
  name: {
    type: String,
    default: null,
  },
  title: {
    type: String,
    default: null,
  },
  image: {
    type: String,
    default: null,
  },
  handle: {
    type: String,
    default: null,
  },
});
let emits = defineEmits(["test"]);
const curr_api = inject("curr_api");

</script>

<template>
  <div class="teach_head_wrapper">

    <div class="headshot">
      <img v-lazy="image" loading="lazy" alt="headshot" class="img_headshot"
           @click="openNewTab(`https://www.instagram.com/${handle}/`)">
      <shoe-loader/>
    </div>

    <div style="display:flex;flex-flow: column;justify-content: center;gap: 0">
      <h1>{{ name }}</h1>
      <h4 class="bi-instagram">
        {{ handle }}</h4>
    </div>
  </div>
</template>

<style scoped>
.teach_head_wrapper {
  position: relative;
  display: flex;
  flex-flow: column;
  gap: 15px;

  align-content: center;
  justify-items: center;
  text-align: center;

  /*background-color: #7e1863;*/
  /*padding: 10px;*/
  border-radius: 5px;
}

.headshot {
  position: relative;
  height: 150px;
  width: 150px;
  border-radius: 50%;

  cursor: pointer;
  overflow: hidden;

  transition: all 200ms cubic-bezier(0.0, 1.0, 1.0, 1.0); /* custom */
}

.headshot:hover {
  box-shadow: #3e73dd 0 0 50px;
  transform: scale(1.05);
}
.img_headshot {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.teach_head_wrapper h1 {
  font-weight: 500;
  font-size: 1.5em;
  letter-spacing: 1px;
  z-index: 10;
  /*background-color: rgba(255,255,255,0.1);*/
}

.teach_head_wrapper h4 {
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
  color: grey;
  font-size: 0.8em;
}


</style>