<template>
  <div class="sort">
    <h1>Sort</h1>
    <br />
    <div class="controls">
      <div class="control">
        <label for="reverse">reverse</label>
        <input
          @change="ChangeOrder"
          :checked="rules.reverse"
          id="reverse"
          type="checkbox"
          name="reverse"
        />
      </div>
      <div class="control">
        <label for="ById">ById</label>
        <input
          @change="ChangeOrder"
          name="ById"
          :checked="rules.ById"
          id="ById"
          type="checkbox"
        />
      </div>
      <div class="control">
        <label for="ByName">ByName</label>
        <input
          @change="ChangeOrder"
          name="ByName"
          :checked="rules.ByName"
          id="ByName"
          type="checkbox"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    rules: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    ChangeOrder($event) {
      this.$emit("ChangeOrder", {
        name: $event.target.name,
        checked: $event.target.checked,
      });
    },
  },
};
</script>
