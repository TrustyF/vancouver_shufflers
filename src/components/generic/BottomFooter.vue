<script setup>
import {inject, onMounted, watch, ref, computed} from "vue";

</script>

<template>
  <div class="footer_container">
    <div class="spacer"></div>
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
  flex-flow: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  /*margin: 10px 0 20px 0;*/
  padding: 20px;
  margin-top: auto;
  /*margin-bottom: 20px;*/
}
.bottom_footer {
  font-size: 0.7em;
  opacity: 50%;
}
.spacer {
  /*outline: 1px solid;*/
  /*height: auto;*/
}
</style>