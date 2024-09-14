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

let props = defineProps({
  test: {
    type: String,
    default: null,
  },
});
let emits = defineEmits(["test"]);
const curr_api = inject("curr_api");

let curr_video = ref('')
let last_video = null;
let video_player = ref()
let height = '800px'

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
  // console.log('selecting', curr_video.value)
}

onBeforeMount(() => {
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
          @ended="sel_rand"
          class="video_embed"
      >
      </video-background>
  </div>
</template>

<style scoped>
.spacer {
  height: 600px;
}

.video_embed_wrapper {
  z-index: -1;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: v-bind(height);
}

.video_embed {
  /*outline: 1px solid red;*/
  height: v-bind(height);
  width: 100%;

  -webkit-mask-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.2)), to(rgba(0, 0, 0, 0)));
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.3) 30%, rgba(0, 0, 0, 0.3) 40%, rgba(0, 0, 0, 0) 100%);
}


</style>