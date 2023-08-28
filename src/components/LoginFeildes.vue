<template>
  <div class="parent">
    <div style="color: red">{{ error }}</div>
    <label :for="text">{{ text }}</label>
    <input :value="value" @input="input" :id="text" :type="type" />
    <br />
  </div>
</template>

<script>
export default {
  name: "login-feildes",
  emits: ["updatevalue"],
  props: {
    value: {
      type: String,
      required: true,
    },
    error: {
      type: String,
    },
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default() {
        return "text";
      },
    },
    rules: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  data() {
    return {};
  },

  created() {
    this.$emit("updatevalue", {
      value: this.value,
      error: this.validate(this.value),
      name: this.text.toLowerCase(),
    });
  },
  methods: {
    input($event) {
      this.$emit("updatevalue", {
        value: $event.target.value,
        error: this.validate($event.target.value),
        name: this.text.toLowerCase(),
      });
    },

    validate(value) {
      if (this.rules.required && value.length === 0) {
        return "Required";
      }
      if (this.rules.min > value.length) {
        return `The min value of this must be ${this.rules.min}`;
      }
    },
  },
};
</script>

<style scoped>
.parent {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
