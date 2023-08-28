<template>
  <form>
    <fieldset>
      <legend>Chosse your luck number</legend>
      <label for="luck">Luck number</label>
      <input
        v-model="lucknumber"
        id="luck"
        type="number"
        placeholder="luck number"
      />
    </fieldset>

    <fieldset>
      <legend>Chosse a color</legend>
      <label for="color">Font color</label>
      <input v-model="color" id="color" type="color" />
    </fieldset>

    <fieldset>
      <p class="the_advice" :style="{ color: color }">
        {{ getAdvice }}
      </p>
    </fieldset>
  </form>
</template>

<script>
export default {
  name: "result-form",

  data() {
    return {
      lucknumber: 1,
      color: "#000000",
      advices: ["advice 0", "advice 1", "advice 2", "advice 3"],
    };
  },
  computed: {
    getAdvice() {
      const advice = this.advices.find((v, i) => i == this.lucknumber);
      if (!advice) return "Sorry you are not lucky";
      return advice;
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
