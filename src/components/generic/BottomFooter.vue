<script setup>
import {inject, onMounted, watch, ref, computed} from "vue";

</script>

<template>
  <div class="footer_container">
    <h3 class="bottom_footer">By Arthur Sirjacobs. 2024</h3>
  </div>
</template>

<style scoped>
.footer_container {
  /*outline: 1px solid red;*/
  position: relative;
  left: 0;
  bottom: 0;
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 10px 0 20px 0;
}
.bottom_footer {
  font-size: 0.7em;
  opacity: 50%;
}
</style>