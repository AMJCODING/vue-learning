<template>
  <div class="formInput">
    <div> 
      <label for="title">Title</label>
      <input class="shadow" v-model="title" id="title" type="text" />
    </div>

    <div>
      <label for="text">Text</label>
      <textarea
      class="shadow"
        v-model="text"
        name="text"
        id="text"
        cols="20"
        rows="10"
      ></textarea>
    </div>
    <div>
      <label for="color">Color</label>
      <input class="shadow" v-model="color" id="color" type="color" />
    </div>
    <div>
      <button class="shadow" @click="addItem">Add Item</button>
      <button class="shadow" @click="editItem">Edit Item</button>
    </div>
  </div>
</template>
<script>
import FormButton from "@/components/Button.vue";
export default {
  data() {
    return {
      title: "",
      text: "",
      color: "black",
    };
  },

  methods: {
    addItem() {
      const payload = {
        title: this.title,
        text: this.text,
        color: this.color,
      };
      this.$store.dispatch("addItem", payload);
    },

    editItem() {
      const newItem = {
        title: this.title,
        text: this.text,
        color: this.color,
      };
      this.$store.dispatch("editItem", {
        oldItem: this.$store.getters.getCurrentItem,
        newItem,
      });
    },
  },

  created() {
    this.title = this.currentItem.title;
    this.text = this.currentItem.text;
    this.color = this.currentItem.color;
  },
  computed: {
    currentItem() {
      return this.$store.getters.getCurrentItem;
    },
  },
  components: {
    FormButton,
  },
};
</script>

<style scoped>
button{
  margin: 5px;
}
.shadow{
  box-shadow: 1px 1px 2px;
}
.shadow:hover{
  box-shadow: 1px 1px 5px;
}
.formInput {
  display: flex;
  flex-direction: column;
  align-items: center;
}
label {
  display: block;
}
input{
  outline-color: black;
  border: none;
}
textarea {
  outline-color: black;
  border: none;
  border-radius: 10px;
  font-size: 25px;
}
div{
  margin: 5px;
}
</style>
