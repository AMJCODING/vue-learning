<template>
  <div class="about">
    <second-header
      title="Please give me advice"
      text="Enter the luck number and test your luck"
    ></second-header>
    <result-form></result-form>
  </div>
</template>

<script>
import SecondHeader from "@/components/SeconddHeader.vue";
import ResultForm from "@/components/ResultForm.vue";

export default {
  name: "about-veu",
  components: {
    SecondHeader,
    ResultForm,
  },
};
</script>
