<template>
  <div class="login">
    <second-header title="Login" text="Login here please"></second-header>
    <form @submit.prevent="submit">
      <fieldset>
        <login-feild
          :rules="username.rules"
          text="username"
          type="username"
          :error="username.error"
          :value="username.value"
          @updatevalue="update"
        ></login-feild>
        <br />
        <login-feild
          :rules="password.rules"
          text="password"
          type="password"
          :error="password.error"
          :value="password.value"
          @updatevalue="update"
        ></login-feild>
        <Login-btn :disabled="!isValid" val="Login"></Login-btn>
      </fieldset>
    </form>
  </div>
</template>

<script>
import SecondHeader from "@/components/SeconddHeader.vue";
import LoginFeild from "@/components/LoginFeildes.vue";
import LoginBtn from "@/components/LoginButton.vue";
export default {
  name: "login-vue",
  components: {
    SecondHeader,
    LoginFeild,
    LoginBtn,
  },
  data() {
    return {
      username: {
        value: "",
        rules: {
          required: true,
          min: 4,
        },
        error: "",
      },
      password: {
        value: "",
        rules: {
          required: true,
          min: 8,
        },
        error: "",
      },
    };
  },
  methods: {
    update({ value, error, name }) {
      this[name].error = error;
      this[name].value = value;
    },

    submit() {
      console.log(
        `Hello "${this.username.value}" Your password is "${this.password.value}"`
      );
    },
  },
  computed: {
    isValid() {
      if (!this.password.error && !this.username.error) {
        return true;
      }

      return false;
    },
  },
};
</script>
<style scoped>
fieldset {
  margin: 2rem;
  padding: 3rem;
  border-radius: 1rem;
  max-width: 40%;
  display: flex;
  flex-direction: column;
}
</style>
