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

    <div style="margin-bottom: 10px">
      <p>
        Weekly meetups happen every <strong>wednesday</strong> from <strong>6 to 8 pm</strong> at
        <strong style="color: #ff0090;cursor: pointer;text-decoration: underline" @click="openNewTab('https://www.google.com/maps/place/Robson+Square+Ice+Rink/@49.284388,-123.120329,13z/data=!4m6!3m5!1s0x5486717f915e2013:0xd20657ca465e5452!8m2!3d49.2820012!4d-123.1214112!16s%2Fg%2F1tph1f7d?hl=en-CA&entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D')">
          Robson Square ice rink</strong>
        or the <strong style="color: #ff0090;cursor: pointer;text-decoration: underline" @click="openNewTab('https://maps.app.goo.gl/hhxqZsin1vadBtMK9')">
        red coil statue</strong> up the stairs
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
  color: #6699ff;
}

.map_link:visited {
  color: inherit;
}
</style>