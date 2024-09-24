<script setup>
import ScheduleComponent from "@/components/text/EventsComponent.vue";
import HeadingComponent from "@/components/text/HeadingComponent.vue";
import TeachersComponent from "@/components/text/TeachersComponent.vue";
import LinksComponent from "@/components/text/LinksComponent.vue";
import CarouselComponent from "@/components/generic/CarouselComponent.vue";
import AboutComponent from "@/components/text/AboutComponent.vue";
import {log_event} from "@/scripts/log_events.js";
import {onMounted} from "vue";

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

  for (let i in elements) {
    if (elements[i] === null) {
      setTimeout(() => track_elements_observer(), 100)
      return
    } else {
      observer.observe(elements[i])
    }
  }

}

onMounted(()=>{
  track_elements_observer()
})

</script>

<template>
  <div class="feed">
    <div class="spacer"></div>
    <heading-component/>
    <div class="grouper" id="carousel_anchor">
      <links-component/>
      <carousel-component/>
    </div>
    <teachers-component/>
    <about-component/>
  </div>
</template>

<style scoped>

.grouper {
  display: flex;
  flex-flow: column;
  gap: 20px;
}

.spacer {
  height: 500px;
}

@media only screen and (max-width: 660px) {
  .spacer {
    height: 400px;
  }
}

@media only screen and (max-width: 1000px) {
  .spacer {
    height: 400px;
  }
}
</style>
