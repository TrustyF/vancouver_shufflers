<script setup>
import {RouterView} from 'vue-router'
import NavBar from "@/components/generic/NavBar.vue";
import BottomFooter from "@/components/generic/BottomFooter.vue";
import {onMounted} from "vue";
import {useRoute} from "vue-router";
import {log_event} from "@/scripts/log_events.js";

let route = useRoute()

function track_leave() {
  log_event('page_leave', 'nav', `from:${route.name}`)
}

onMounted(()=>{
  window.addEventListener('beforeunload', track_leave)
})

</script>

<template>
  <nav-bar/>
  <router-view/>
  <bottom-footer/>
</template>

<style scoped>

</style>
