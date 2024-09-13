<script setup>
import {inject, onMounted, watch, ref, computed} from "vue";
import Logo_full from "/src/assets/YVR_Shufflers_Logo_Lockup_Horizontal.svg";

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
  <img :src="Logo_full" class="logo_full" alt="logo">
</template>

<style scoped>

</style>