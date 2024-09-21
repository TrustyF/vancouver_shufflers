<script setup>
import {inject, onMounted, watch, ref, computed} from "vue";
import ScheduleComponent from "@/components/text/EventsComponent.vue";

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
    <schedule-component/>
  </div>
</template>

<style scoped>

</style>