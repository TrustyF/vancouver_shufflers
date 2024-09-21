<script setup>
import ScheduleComponent from "@/components/text/EventsComponent.vue";
import HeadingComponent from "@/components/text/HeadingComponent.vue";
import TeachersComponent from "@/components/text/TeachersComponent.vue";
import LinksComponent from "@/components/text/LinksComponent.vue";
import CarouselComponent from "@/components/generic/CarouselComponent.vue";
import AboutComponent from "@/components/text/AboutComponent.vue";
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
