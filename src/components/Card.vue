<template>
  <div class="card" :style="{ background: background, width: width }">
    <div v-show="showMedia" class="media">
      <slot name="media"></slot>
    </div>

    <div class="details">
      <div v-show="showTitle" class="title">
        <slot name="title"></slot>
      </div>
      <div v-show="showContent" class="content">
        <slot name="content"></slot>
      </div>
      <div v-show="showActions" class="actions">
        <slot name="actions"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    background: String,
    width: {
      type: String,
    },
    showMedia: Boolean,
    showTitle: Boolean,
    showContent: Boolean,
    showActions: Boolean,
  },
};
</script>

<style scoped>
.card {
  display: flex;
  border: 0.1px solid;
  margin: 1rem 3rem;
  padding: 1.5rem;
  border-radius: 10px;
  justify-content: space-around;
  box-shadow: 1px 1px 10px gray;
}
.details {
  margin: 0 1.5rem;
}
.content,
.actions {
  margin: 1rem 0;
}
</style>
