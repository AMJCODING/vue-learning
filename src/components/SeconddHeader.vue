<template>
  <header>
    <h2>{{ title }}</h2>
    <p>{{ text }}</p>
  </header>
</template>

<script>
export default {
  name: "nd-header",
  props: {
    title:String,
    text:String,
  },
};
</script>

<style scoped>
p {
  margin-top: 10px;
  font-weight: 200;
}
header {
  text-align: center;
  padding: 20px 40px;
  width: fit-content;
  margin: 20px auto;
  font-size: 30px;
  border-radius: 20px;
  box-shadow: 0px 0px 1px ;
}
</style>
