<script setup>
import {inject, onMounted, watch, ref, computed} from "vue";
import {RouterLink} from 'vue-router'
import Logo_full from "/src/assets/YVR_Shufflers_Logo_Lockup_Horizontal.svg";

let props = defineProps({
  test: {
    type: String,
    default: null,
  },
});

let is_mobile = inject('is_mobile')

function scroll_to(className) {
  let elem = window.document.getElementById(className)
  elem.scrollIntoView({behavior: 'smooth',block:"center"})
}

</script>

<template>
  <nav id="nav_bar">
    <img :src="Logo_full" class="logo_full" alt="logo">
    <p class="nav_link" @click="scroll_to('schedule_anchor')">Schedule</p>
    <p class="nav_link" @click="scroll_to('links_anchor')">Links</p>
  </nav>
</template>

<style scoped>
nav {
  z-index: 1000;
  margin-top: 20px;

  position: relative;
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
  align-items: center;

  gap: 20px;
  height: 130px;
}

.logo_full {
  object-fit: contain;
  height: 100%;
  padding: 20px;
  filter: invert();
}

.nav_link {
  color: white;
  padding: 40px;
  font-size: 1em;
  font-weight: 400;
  letter-spacing: 1px;
  cursor: pointer;
  text-decoration: none;
}

.nav_link:hover {
  text-decoration: underline;
}

@media only screen and (max-width: 1000px) {
}

@media only screen and (max-width: 660px) {
  nav {
    flex-flow: column;
  }
  .nav_link {
    visibility: hidden;
  }
  .logo_full {
    width: 100%;
    height: unset;
  }
}
</style>