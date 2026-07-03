<script setup>
import {inject, onMounted, watch, ref, computed} from "vue";
import MapEmbed from "@/components/embed/MapEmbed.vue";
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
  <div class="text_block" id="location_anchor">
<!--    <h1>Location</h1>-->



    <map-embed/>
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
  font-weight: 800;
  padding: 5px;
  color: #6699ff;
}

.map_link:visited {
  color: inherit;
}
</style>