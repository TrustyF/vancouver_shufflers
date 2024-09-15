<script setup>
import {inject, onMounted, watch, ref, computed} from "vue";
import {openNewTab} from "@/scripts/helpers.js";

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
  <div class="links_wrapper" id="links_anchor">
    <div @click="openNewTab('https://www.instagram.com/yvrshufflers/')" class="insta_bg">
      <p class="bi-instagram insta_btn">Instagram</p>
    </div>
    <div @click="openNewTab('https://www.facebook.com/groups/465104400560475')" class="fb_bg">
      <p class="bi-facebook insta_btn">Facebook</p>
    </div>
  </div>
</template>

<style scoped>
.links_wrapper {
  display: flex;
  flex-flow: row wrap;
  gap: 10px;
  align-items: flex-start;
  /*justify-content: space-evenly;*/
}

.insta_bg {
  border-radius: 30px;
  padding: 2px;
  background-image: linear-gradient(to left top, rgb(131, 58, 180), rgb(253, 29, 29), rgb(252, 176, 69));
}

.fb_bg {
  border-radius: 30px;
  padding: 2px;
  background: #00c6ff;
  background: linear-gradient(to right, #00c6ff, #0072ff);
}

.insta_btn {
  display: flex;
  flex-flow: row;
  gap: 5px;
  justify-items: center;
  align-items: center;
  cursor: pointer;

  font-weight: 800;
  font-size: 0.7em;
  white-space: nowrap;
  text-transform: uppercase;

  padding: 15px;
  border-radius: 30px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.8);
  transition: 100ms ease-in-out;
}

.insta_btn:hover {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>