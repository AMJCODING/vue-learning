<template>
  <button :disabled="disabled">{{ val }}</button>
</template>

<script>
export default {
  name: "login-feildes",
  props: {
    val: {
      type: String,
      required: true,
      default() {
        return "Login";
      },
    },
    disabled: {
      disabled: Boolean,
      required: false,
    },
  },
};
</script>
