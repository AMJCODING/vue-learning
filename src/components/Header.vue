<template>
  <div class="header">
    <router-link to="/home">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/blog">Blog</router-link>
    <router-link to="/">My Quotes</router-link>
    <router-link to="/about_view">Give me advice</router-link>
    <router-link to="/myvideos">My videos</router-link>
    <router-link to="/PersonalDiary">Personal diary</router-link>
    <router-link style="color: rgb(0, 81, 116)" to="/login"
      >Login
    </router-link>
  </div>
</template>

<script>
export default {
  name: "header-vue",
};
</script>

<style lang="scss" scoped>
.header {
  background-color: rgb(233, 233, 233);
  padding: 30px;
  font-size: 20px;
  box-shadow: 0px 0px 5px ;
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  a {

    &.router-link-exact-active {
      color: #42b983;
      box-shadow: 1px 1px 1px;
    }
  }
}
</style>
