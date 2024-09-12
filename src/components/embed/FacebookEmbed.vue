<script setup>
import {inject, onMounted, watch, ref, computed} from "vue";

let props = defineProps({
  test: {
    type: String,
    default: null,
  },
});
let emits = defineEmits(["test"]);
const curr_api = inject("curr_api");

function connect_script() {
  const tag = document.createElement('script');
  tag.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v20.0";
  tag.async = true
  tag.defer = true
  tag.nonce = "Dq6JHUHQ"
  tag.crossOrigin = "anonymous"

  document.body.appendChild(tag);
}

onMounted(() => {
  connect_script()
})
</script>

<template>
  <div class="fb-group" data-href="https://www.facebook.com/groups/465104400560475" data-width="280"
       data-show-metadata="false">
    <blockquote cite="https://www.facebook.com/groups/465104400560475" class="fb-xfbml-parse-ignore">YVR Shufflers
    </blockquote>
  </div>
</template>

<style scoped>

</style>