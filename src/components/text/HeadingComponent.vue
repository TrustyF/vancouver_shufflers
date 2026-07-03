<script setup>
import {inject, onMounted, watch, ref, computed} from "vue";
import CarouselComponent from "@/components/generic/CarouselComponent.vue";
import LinksComponent from "@/components/text/LinksComponent.vue";
import {openNewTab} from "@/scripts/helpers.js";

let props = defineProps({
  test: {
    type: String,
    default: null,
  },
});
let emits = defineEmits(["test"]);
const curr_api = inject("curr_api");

</script>

<template>
  <div class="text_block">
    <!--    <h1>YVR Shufflers</h1>-->
    <p>
      Join Vancouver’s vibrant shuffle dance community, bringing together dancers of <strong>all levels</strong> to
      celebrate
      and grow the art of shuffle.<br>
      Whether you’re a seasoned dancer or just getting started, our group is here to support your journey.
    </p>
    <p>
      Our mission is to foster a welcoming and inclusive environment for everyone passionate about shuffle dance.<br>
      We’re always open to collaborations with fellow shufflers, creators, and dance enthusiasts. <br>
    </p>
    <p>
      Meetups are <strong>free</strong> and <strong>open to everyone</strong> !<br>
    </p>
    <p style="margin-top: 15px;margin-bottom: 15px;color: white;font-weight: 400">
      Join us and become part of Vancouver’s growing shuffle dance scene!
    </p>

    <div>
      <p>
        Weekly meetups happen every <strong>wednesday</strong> from <strong>6 to 8 pm</strong> at
        <strong style="color: #ff0090;cursor: pointer;text-decoration: underline"
                @click="openNewTab('https://www.google.com/maps/place/Robson+Square+Ice+Rink/@49.284388,-123.120329,13z/data=!4m6!3m5!1s0x5486717f915e2013:0xd20657ca465e5452!8m2!3d49.2820012!4d-123.1214112!16s%2Fg%2F1tph1f7d?hl=en-CA&entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D')">
          Robson Square ice rink</strong>
        or the <strong style="color: #ff0090;cursor: pointer;text-decoration: underline"
                       @click="openNewTab('https://maps.app.goo.gl/hhxqZsin1vadBtMK9')">
        red coil statue</strong> up the stairs
      </p>
    </div>

    <!--    <div class="overflow_guard">-->
    <!--      <div class="background"></div>-->
    <!--    </div>-->

  </div>
</template>

<style scoped>
.text_block {
  position: relative;
  display: flex;
  flex-flow: column;
  gap: 10px;
}

.overflow_guard {
  /*outline: 1px solid red;*/
  pointer-events: none;
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100vw;
  height: 200%;
  transform: translate(-50%, -50%);
  overflow: hidden;
}

.background {
  position: absolute;
  left: 50%;
  top: 50%;
  height: 33%;
  width: 200vw;
  background-color: rgba(0, 0, 0, 0.5);
  transform: translate(-50%, -50%);
  filter: blur(40px);
}

.text_block h1 {
  font-weight: 800;
  z-index: 5;
}

.text_block p {
  font-weight: 300;
  line-height: 1.8em;
  color: #e1e1e1;
  z-index: 5;
}

.text_block strong {
  font-weight: 800;
  padding: 2px;
  color: #6699ff;
}
</style>