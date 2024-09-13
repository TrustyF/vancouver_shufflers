<script setup>
import {inject, onMounted, watch, ref, computed} from "vue";
import MapEmbed from "@/components/embed/MapEmbed.vue";

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
  <div class="text_block">
    <h1>Shedule</h1>

    <div style="margin-bottom: 10px">
      <p>
        Meetups happen every <strong>wednesday</strong> from <strong>6 to 8 pm</strong> at Robson Square ice rink.
      </p>
      <p style="color: #b3b3b3;font-size: 0.8em">
        If you can't find us check the <strong style="color: #b3005f">red coil statue</strong> up the stairs
      </p>
    </div>

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
  color: #3e73dd;
}
</style>