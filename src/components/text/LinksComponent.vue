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
  <div class="text_block" id="links_anchor">
    <h1>Links</h1>
    <p>
      YVR Shufflers is Vancouver’s vibrant shuffle dance community, bringing together dancers of <strong>all levels</strong> to celebrate
      and grow the art of shuffle.
      Whether you’re a seasoned dancer or just getting started, our group is here to support your journey.
    </p>
  </div>
</template>

<style scoped>
.text_block {
  display: flex;
  flex-flow: column;
  gap: 10px;
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
  font-weight: 500;
}
</style>