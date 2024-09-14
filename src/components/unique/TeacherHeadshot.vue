<script setup>
import {inject, onMounted, watch, ref, computed} from "vue";

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
});
let emits = defineEmits(["test"]);
const curr_api = inject("curr_api");

</script>

<template>
  <div class="teach_head_wrapper">
    <img :src="image" class="headshot" alt="headshot">
    <div>
      <h1>{{ name }}</h1>
<!--      <h4>{{ title }}</h4>-->
    </div>
  </div>
</template>

<style scoped>
.teach_head_wrapper {
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
  height: 150px;
  width: 150px;
  object-fit: cover;
  border-radius: 50%;
}
.teach_head_wrapper h1 {
  font-weight: 300;
  font-size: 1.2em;
  letter-spacing: 1px;
  /*background-color: rgba(255,255,255,0.1);*/
}

.teach_head_wrapper h4 {
  font-weight: 300;
  font-size: 0.8em;
  color: lightgrey;
}
</style>