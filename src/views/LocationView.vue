<script setup>
import {inject, onMounted, watch, ref, computed} from "vue";
import LocationComponent from "@/components/text/LocationComponent.vue";

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
  <div class="feed">
    <location-component/>
  </div>
</template>

<style scoped>

</style>