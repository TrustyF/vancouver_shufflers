<script setup>
import {RouterView} from 'vue-router'
import NavBar from "@/components/generic/NavBar.vue";
import BottomFooter from "@/components/generic/BottomFooter.vue";
import {nextTick, onMounted} from "vue";
import {useRoute} from "vue-router";
import {log_event} from "@/scripts/log_events.js";

let route = useRoute()

function track_leave() {
  log_event('page_leave', 'nav', `from:${route.name}`)
}

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
  window.addEventListener('beforeunload', track_leave)
  track_elements_observer()
})

</script>

<template>
  <nav-bar/>
  <router-view/>
  <bottom-footer/>
</template>

<style scoped>

</style>
