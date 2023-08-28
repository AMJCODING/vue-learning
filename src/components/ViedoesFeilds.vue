<template>
  <div class="ViedoesFeilds">
    <label for="url">Video URL</label>
    <input v-model="VideoURL" type="url" id="url" />
    <label for="name">Video name</label>
    <input v-model="VideoName" type="text" id="name" />
    <button @click="addVideo">Add video</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      VideoName: "",
      VideoURL: "",
    };
  },
  methods: {
    addVideo() {
      this.$emit("addVideo", {
        name: this.VideoName,
        url: this.VideoURL,
      });
    },
  },
};
</script>
<style scoped>
.ViedoesFeilds {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
