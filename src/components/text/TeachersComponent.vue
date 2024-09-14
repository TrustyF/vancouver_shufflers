<script setup>
import {inject, onMounted, watch, ref, computed} from "vue";
import TeacherHeadshot from "@/components/unique/TeacherHeadshot.vue";

import turtle from '/src/assets/headshots/turtle.webp'
import anthony from '/src/assets/headshots/anthony.webp'
import erin from '/src/assets/headshots/erin.webp'
import gab from '/src/assets/headshots/gab.webp'

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
  <div class="text_block" id="teacher_anchor">
    <h1>Your teachers</h1>
    <div class="headshots">
      <teacher-headshot
          :image="anthony"
          name="Anthony"
          handle="vancityshuffler"
          title="Teacher"/>
      <teacher-headshot
          :image="turtle"
          name="Turtle"
          handle="turtleteplitsky"
          title="Teacher"/>
      <teacher-headshot
          :image="erin"
          name="Erin"
          handle="erinlai212"
          title="Teacher"/>
      <teacher-headshot
          :image="gab"
          name="Gabriella"
          handle="gabriellagloria_"
          title="Teacher"/>
    </div>

  </div>
</template>

<style scoped>
.headshots {
  display: flex;
  flex-flow: row wrap;
  gap: 10px;
  align-items: flex-start;
  justify-content: space-evenly;
}


.text_block {
  display: flex;
  flex-flow: column;
  gap: 50px;
}

.text_block h1 {
  font-weight: 800;
}

.text_block p {
  font-weight: 300;
  line-height: 1.8em;
  color: #d9d9d9;
}

.text_block strong {
  font-weight: 800;
  padding: 2px;
  color: #4785ff;
}
</style>