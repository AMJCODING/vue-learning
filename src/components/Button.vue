<template>
    <router-link class="button"
      :style="{ background: background }"
      :class="{ FullWidth: FullWidth }"
      :to="link"
      >{{ title }}</router-link
    >
</template>
<script>
export default {
  props: {
    title: String,
    background: String,
    color: String,
    link: {
      type: String,
      default() {
        return "/";
      },
    },
    FullWidth: {
      type: Boolean,
    },
  },
};
</script>
<style>
.FullWidth {
  display: block;
  width: 100%;
}
.button {
  text-align: center;
  margin: 0.5rem 0.5rem;
  padding: 0.5rem;
}
</style>
