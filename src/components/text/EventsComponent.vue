<script setup>
import {inject, onMounted, watch, ref, computed} from "vue";
import CalendarEmbed from "@/components/embed/CalendarEmbed.vue";

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
  <div class="text_block" id="schedule_anchor">
<!--    <h1>Schedule</h1>-->
    <calendar-embed/>
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
  color: #80aaff;
}
.map_link:visited {
  color: white;
}
</style>