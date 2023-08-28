<template>
  <div class="quotes">
    <p class="quote">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "quote-text",
  props: ["text"],
};
</script>

<style scoped>
.quote {
  padding: 1.5rem;
  margin: auto;
  margin-bottom: 5px;
}

.quotes {
  display: flex;
  margin: 10px auto;
  width: 26%;
  font-weight: bold;
  box-shadow: 1px 1px 2px ;
  border-radius: 5px;
}
</style>
