<script setup>
import {RouterView} from 'vue-router'
import NavBar from "@/components/generic/NavBar.vue";
import BottomFooter from "@/components/generic/BottomFooter.vue";
</script>

<template>
  <nav-bar/>
  <router-view/>
  <bottom-footer/>
</template>

<style scoped>

</style>
