<script setup>
import FacebookEmbed from "@/components/embed/FacebookEmbed.vue";
import MapEmbed from "@/components/embed/MapEmbed.vue";
import VideoEmbed from "@/components/embed/VideoEmbed.vue";
import ScheduleComponent from "@/components/generic/text/ScheduleComponent.vue";
import AboutComponent from "@/components/generic/text/AboutComponent.vue";
</script>

<template>
  <video-embed/>
  <div class="feed">
    <about-component/>
    <schedule-component/>
  </div>
</template>

<style scoped>
.feed {
  display: flex;
  flex-flow: column;
  gap: 100px;
}
</style>
