<script setup>
import {inject, onMounted, watch, ref, computed} from "vue";
import ShoeLoader from "@/components/generic/ShoeLoader.vue";

let props = defineProps({
  test: {
    type: String,
    default: null,
  },
});
let emits = defineEmits(["test"]);
const curr_api = inject("curr_api");

let loaded = ref(false)

</script>

<template>
  <div class="calendar_wrapper">
    <iframe v-show="loaded" @load="loaded=true" class="frame"
        :src="`https://calendar.google.com/calendar/embed?wkst=2&ctz=America%2FVancouver`+
        `&showNav=1&showTitle=0&showPrint=0&showCalendars=0`+
        `&src=NGNhYmIxMzdlYWNlOGUxODA5MzQ5ZTEzZTAyYzk0NmIzOTM2MDNhNTBhODE5MmYxYzIyMWRmOTAxYWRkNWNjZUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t`+
        `&src=ZW4uY2FuYWRpYW4jaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20`+
        `&color=%23F4511E`"
        style="border-width:0" width="100%" height="100%" frameborder="0" scrolling="no"></iframe>
    <shoe-loader/>
  </div>
</template>

<style scoped>
.calendar_wrapper {
  /*outline: 1px solid red;*/
  position: relative;
  width: 100%;
  height: 800px;
  border-radius: 8px;
  overflow: hidden;
}
.placeholder {
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-color: #fdfdfd;
  /*outline: 1px solid red;*/
}
.frame {
  position: absolute;
  filter: invert(.8) hue-rotate(150deg);
  animation: fadein 500ms;
}
@media only screen and (max-width: 660px) {
  .calendar_wrapper {
    height: 400px;
  }
}
</style>