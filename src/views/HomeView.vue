<script setup>
import VideoEmbed from "@/components/embed/VideoEmbed.vue";
import ScheduleComponent from "@/components/text/ScheduleComponent.vue";
import AboutComponent from "@/components/text/AboutComponent.vue";
import TeachersComponent from "@/components/text/TeachersComponent.vue";
import LinksComponent from "@/components/text/LinksComponent.vue";
</script>

<template>
  <video-embed/>
  <div class="feed">
    <about-component/>
    <teachers-component/>
    <schedule-component/>
<!--    <links-component/>-->
  </div>
</template>

<style scoped>
.feed {
  display: flex;
  flex-flow: column;
  gap: 50px;
}
</style>
