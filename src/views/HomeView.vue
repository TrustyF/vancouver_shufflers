<script setup>
import VideoEmbed from "@/components/embed/VideoEmbed.vue";
import ScheduleComponent from "@/components/text/ScheduleComponent.vue";
import AboutComponent from "@/components/text/AboutComponent.vue";
import TeachersComponent from "@/components/text/TeachersComponent.vue";
import LinksComponent from "@/components/text/LinksComponent.vue";
import CarouselComponent from "@/components/generic/CarouselComponent.vue";
</script>

<template>
  <video-embed/>
  <div class="feed">
    <about-component/>
    <div class="grouper" id="carousel_anchor">
      <links-component/>
      <carousel-component/>
    </div>
    <teachers-component/>
    <schedule-component/>
  </div>
</template>

<style scoped>
.feed {
  display: flex;
  flex-flow: column;
  gap: 50px;
}

.grouper {
  display: flex;
  flex-flow: column;
  gap: 20px;
}
</style>
