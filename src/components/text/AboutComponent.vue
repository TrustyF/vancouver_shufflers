<script setup>
import {inject, onMounted, watch, ref, computed} from "vue";
import CarouselComponent from "@/components/generic/CarouselComponent.vue";
import LinksComponent from "@/components/text/LinksComponent.vue";

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
    <h1> Mission </h1>
    <p>
      YVR Shufflers exists to foster a love for shuffle dance and create a vibrant, supportive environment where dancers
      of all skill levels can thrive. <br> We believe in the power of dance to connect people and spread joy.
    </p>
  </div>
  <div class="text_block">
    <h1> Story </h1>
    <p>
      YVR Shufflers began as a small group of dancers meeting up in Vancouver’s parks. <br> Over time, we’ve grown into a
      tight-knit community, bringing together passionate dancers, collaborating with DJs, and participating in local
      events and festivals. <br> Today, we’re not just a dance group—we’re a movement.
    </p>
  </div>
<!--  <div class="text_block">-->
<!--    <h1> Community values </h1>-->
<!--    <p>-->
<!--      At YVR Shufflers, we promote creativity, inclusivity, and growth. Whether you’re here to master the Melbourne-->
<!--      Shuffle or just to have fun, there’s a place for you in our crew.-->
<!--    </p>-->
<!--  </div>-->
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
  color: #d9d9d9;
  z-index: 5;
}

.text_block strong {
  font-weight: 800;
  padding: 2px;
  color: #80aaff;
}
</style>