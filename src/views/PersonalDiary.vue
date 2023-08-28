<template>
  <div class="PersonalDiary">
    <form-input :key="newKey"></form-input>
    <card-list
      @editButtonClicked="newKey = Math.random()"
      :items="items"
    ></card-list>
  </div>
</template>

<script>
import FormInput from "@/components/FormInput.vue";
import CardList from "@/components/CardList.vue";

export default {
  data() {
    return {
      newKey: 0,
    };
  },

  created() {
    this.$store.dispatch("loadItems");
  },

  computed: {
    items() {
      return this.$store.getters.getItems;
    },
  },

  components: {
    FormInput,
    CardList,
  },
};
</script>

<style scoped>
.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  display: flex;
  flex-wrap: wrap;
  margin: auto 10rem;
}
button {
  margin: 5px;
}
</style>
