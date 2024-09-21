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
  elem.scrollIntoView({behavior: 'smooth', block: "center"})
}

</script>

<template>
  <nav id="nav_bar">
    <img :src="Logo_full" class="logo_full" alt="logo">
    <router-link to="/" class="nav_link">Home</router-link>
    <router-link to="/location" class="nav_link">Location</router-link>
    <router-link to="/events" class="nav_link">Events</router-link>
  </nav>
</template>

<style scoped>
nav {
  z-index: 1000;
  margin-top: 20px;
  margin-bottom: 20px;

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
  color: lightgrey;
  padding: 40px;
  font-size: 1em;
  font-weight: 400;
  letter-spacing: 1px;
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 5px;
  text-decoration-color: transparent;
  transition: 200ms ease;
}

.nav_link:hover, .router-link-active {
  color: white;
  text-decoration-color: white;
}

@media only screen and (max-width: 1000px) {
  nav {
    flex-flow: row wrap;
    height: auto;
    gap: 10px;
  }

  .logo_full {
    width: 40%;
    height: unset;
    padding: 0;
  }
}

@media only screen and (max-width: 660px) {
  nav {
    flex-flow: row wrap;
    height: auto;
    gap: 10px;
    justify-content: space-between;
  }
  .nav_link {
    padding: 10px;
  }
  .logo_full {
    width: 100%;
    height: unset;
    padding: 0;
  }
}
</style>