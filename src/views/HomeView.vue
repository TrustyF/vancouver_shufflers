<script setup>
import FacebookEmbed from "@/components/embed/FacebookEmbed.vue";
import MapEmbed from "@/components/embed/MapEmbed.vue";
import VideoEmbed from "@/components/embed/VideoEmbed.vue";
import BodyComponent from "@/components/generic/BodyComponent.vue";
import MapComponent from "@/components/generic/MapComponent.vue";
</script>

<template>
  <video-embed/>
  <div class="feed">
    <body-component/>
    <map-component/>
  </div>
</template>

<style scoped>
.feed {
  display: flex;
  flex-flow: column;
  gap: 100px;
}
</style>
