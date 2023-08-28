<template>
  <div class="home">
    <second-header text="Read this quotes" title="My Quotes"></second-header>

    <div class="contaynar">
      <single-quote
        v-for="quote in quotes"
        :key="quote.QouteText"
        :text="quote.QouteText"
      ></single-quote>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SingleQuote from "@/components/TheQuotes.vue";
import quotes from "@/json/qoute.json";
import SecondHeader from "@/components/SeconddHeader.vue";

export default {
  name: "HomeView",
  data() {
    return {
      quotes: quotes,
    };
  },
  components: {
    SingleQuote,
    SecondHeader,
  },
};
</script>

<style scoped>
.contaynar {
  height: fit-content;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
}
</style>
