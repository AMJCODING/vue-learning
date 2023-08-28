<template>
  <div class="cards">
    <the-card
      showTitle
      showActions
      :key="item.title"
      :background="item.color"
      showContent
      v-for="item in items"
    >
      <template v-slot:title>
        <h1>{{ item.title }}</h1>
      </template>

      <template v-slot:content>
        {{ item.text }}
      </template>

      <template v-slot:actions>
        <button @click="deleteItem(item)">Delete</button>
        <button @click="getCurrentItem(item)">Edit</button>
      </template>
    </the-card>
  </div>
</template>

<script>
import TheCard from "@/components/Card.vue";
export default {
  props: {
    items: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  methods: {
    deleteItem(item) {
      this.$store.dispatch("deleteItem", item);
    },
    getCurrentItem(currentItem) {
      this.$store.dispatch("getCurrentItem", currentItem);
      this.$emit("editButtonClicked", true);
    },
  },
  components: {
    TheCard,
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
