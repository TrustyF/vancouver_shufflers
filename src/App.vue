<script setup>
import {RouterView, useRoute} from 'vue-router'
import NavBar from "@/components/generic/NavBar.vue";
import BottomFooter from "@/components/generic/BottomFooter.vue";
import {onMounted} from "vue";
import {log_event, ping_user_leave} from "@/scripts/log_events.js";
import VideoEmbed from "@/components/embed/VideoEmbed.vue";

let router = useRoute()

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
  // elements.push(document.getElementById('schedule_anchor'))

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
  // track_elements_observer()
  ping_user_leave()
  setInterval(() => ping_user_leave(), 5000)
})

</script>

<template>
  <nav-bar/>

  <div :class="router.name==='home'?'video_bg':'video_bg hidden'">
    <video-embed/>
  </div>

  <router-view v-slot="{ Component }">
    <transition name="page-fade" mode="out-in">
      <component :is="Component"/>
    </transition>
  </router-view>

  <bottom-footer/>
</template>

<style>
.feed {
  display: flex;
  flex-flow: column;
  gap: 50px;
}

.video_bg {
  opacity: 1;
  visibility: visible;
  transition: 300ms ease;
}

.hidden {
  opacity: 0;
  visibility: hidden;
}

.page-fade-enter-active,
.page-fade-leave-active {
  transition: transform 500ms ease, opacity 500ms ease;
}

.page-fade-enter-from {
  opacity: 0;
  transform: translate(-10%);
}

.page-fade-leave-to {
  opacity: 0;
  transform: translate(10%);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.fade-enter-active,
.fade-leave-active {
  /*position: absolute;*/
}
</style>
