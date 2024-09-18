<script setup>
import {inject, onMounted, watch, ref, computed, onBeforeMount} from "vue";

import video_0 from "/src/assets/videos/insta_2.mp4";
import video_1 from "/src/assets/videos/insta_4.mp4";
import video_2 from "/src/assets/videos/insta_5.mp4";
import video_3 from "/src/assets/videos/insta_6.mp4";
import video_4 from "/src/assets/videos/insta_7.mp4";
import video_5 from "/src/assets/videos/insta_8.mp4";
import video_6 from "/src/assets/videos/insta_9.mp4";
import video_7 from "/src/assets/videos/insta_10.mp4";
import video_8 from "/src/assets/videos/insta_11.mp4";
import video_9 from "/src/assets/videos/insta_12.mp4";
import video_10 from "/src/assets/videos/insta_13.mp4";

import place_1 from '/src/assets/video_placeholders/placeholder_1.webp'
import place_2 from '/src/assets/video_placeholders/placeholder_2.webp'
import place_3 from '/src/assets/video_placeholders/placeholder_3.webp'
import place_4 from '/src/assets/video_placeholders/placeholder_4.webp'
import place_5 from '/src/assets/video_placeholders/placeholder_5.webp'
import place_6 from '/src/assets/video_placeholders/placeholder_6.webp'
import place_7 from '/src/assets/video_placeholders/placeholder_7.webp'
import place_8 from '/src/assets/video_placeholders/placeholder_8.webp'

let props = defineProps({
  test: {
    type: String,
    default: null,
  },
});
let emits = defineEmits(["test"]);
const curr_api = inject("curr_api");

let curr_video = ref('')
let curr_placeholder = ref('')
let last_video = null;
let video_player = ref()
let height = '800px'

function sel_placeholder() {
  let arr = [
    place_1,
    place_2,
    place_3,
    place_4,
    place_5,
    place_6,
    place_7,
    place_8
  ]

  curr_placeholder.value = arr[Math.floor(Math.random() * arr.length)];

}

function sel_rand() {
  let arr = [
    video_0,
    video_1,
    video_2,
    video_3,
    video_4,
    video_5,
    video_6,
    video_7,
    video_8,
    video_9,
    video_10,
  ]
  let available_videos = arr.filter(s => s !== last_video);

  let selected = available_videos[Math.floor(Math.random() * available_videos.length)];

  last_video = selected

  curr_video.value = selected
  sel_placeholder()
  // console.log('selecting', curr_video.value)
}

function pause() {
  if (import.meta.env.DEV) video_player.value.player.pause()
}

onBeforeMount(() => {
  sel_placeholder()
  sel_rand()
})
</script>

<template>
  <div class="spacer"></div>
  <div class="video_embed_wrapper">
    <video-background
        ref="video_player"
        :src="curr_video"
        :loop="false"
        @playing="pause"
        @ended="sel_rand"
        class="video_embed"
        playsWhen="canplaythrough"
        :poster="curr_placeholder"
    >
    </video-background>
  </div>
</template>

<style scoped>
.spacer {
  height: 600px;
}

.video_embed_wrapper {
  pointer-events: none;
  z-index: -1;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: v-bind(height);
}

.video_embed {
  pointer-events: none;
  /*outline: 1px solid red;*/
  height: v-bind(height);
  width: 100%;

  -webkit-mask-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.2)), to(rgba(0, 0, 0, 0)));
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.3) 30%, rgba(0, 0, 0, 0.3) 40%, rgba(0, 0, 0, 0) 100%);
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