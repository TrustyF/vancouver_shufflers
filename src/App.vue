<script setup>
import {RouterView} from 'vue-router'
import NavBar from "@/components/generic/NavBar.vue";
import BottomFooter from "@/components/generic/BottomFooter.vue";
import {onMounted} from "vue";
import {log_event, ping_user_leave} from "@/scripts/log_events.js";

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      log_event('anchor_in_view', 'scroll', entry.target.id)
      observer.unobserve(entry.target);
    }
  });
}, {threshold: 0.8});

function track_elements_observer() {
  const elements = []
  elements.push(document.getElementById('teacher_anchor'))
  elements.push(document.getElementById('carousel_anchor'))
  elements.push(document.getElementById('schedule_anchor'))

  for (let i in elements) {
    if (elements[i] === null) {
      setTimeout(() => track_elements_observer(), 100)
      return
    } else {
      observer.observe(elements[i])
    }
  }

}

onMounted(() => {
  track_elements_observer()
  ping_user_leave()
  setInterval(() => ping_user_leave(), 5000)
})

</script>

<template>
  <nav-bar/>
  <router-view/>
  <bottom-footer/>
</template>

<style scoped>

</style>
