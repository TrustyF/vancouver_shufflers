<script setup>
import {inject, onMounted, watch, ref, computed} from "vue";
import {RouterLink} from 'vue-router'
import Logo_simple from "@/components/svg/logo_simple.vue";
import Logo_full from "/src/assets/YVR_Shufflers_Logo_Lockup_Horizontal.svg";

let props = defineProps({
  test: {
    type: String,
    default: null,
  },
});

let is_mobile = inject('is_mobile')

</script>

<template>
  <nav id="nav_bar">
    <img :src="Logo_full" class="logo_full">
    <div class="nav_link_wrapper">
<!--      <RouterLink class="nav_link" to="/">Home</RouterLink>-->
    </div>
  </nav>
</template>

<style scoped>
nav {
  z-index: 1000;
  margin-bottom: 20px;
  position: relative;
  font-family: "Work Sans", sans-serif;
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
  align-items: center;
  gap: 100px;
  height: 130px;
}
.logo_full {
  object-fit: contain;
  height: 100%;
  padding: 20px;
  filter: invert();
}
.nav_link_wrapper {
  display: flex;
  flex-flow: row;
  justify-content: center;
}

.nav_link {
  text-decoration: underline #181818;
  text-underline-offset: 10px;
  /*color: hsl(160, 51%, 31%);*/
  padding: 40px;
  font-size: 1.2em;
}

.router-link-active {
}

@media only screen and (max-width: 1000px) {
}

@media only screen and (max-width: 660px) {
}
</style>