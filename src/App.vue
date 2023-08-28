<template>
  <div id="app" :style="{ color: color }">
    <vue-header></vue-header>
    <label for="color">App color</label>
    <input v-model="color" id="color" type="color" />
    <router-view />
  </div>
</template>

<script>
import style from "@/assets/style.css";
import VueHeader from "@/components/Header.vue";
export default {
  data() {
    return {
      color: "#000000",
    };
  },
  components: {
    VueHeader,
  },
};
</script>
