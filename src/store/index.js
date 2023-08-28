import Vue from "vue";
import Vuex from "vuex";
import ItemsAPI from "@/API/index.js";

Vue.use(Vuex);

const types = {
  ADD_ITEM: "ADD_ITEM",
  DELETE_ITEM: "DELETE_ITEM",
  GET_CURRENT_ITEM: "GET_CURRENT_ITEM",
  EDIT_ITEM: "EDIT_ITEM",
};

const actions = {
  loadItems(context) {
    const { state } = context;
    ItemsAPI.fetchAllItems().then((all) => (state.items = all));
  },
  addItem(context, payload) {
    const { commit } = context;
    commit(types.ADD_ITEM, payload);
  },
  editItem(context, payload) {
    const { commit } = context;
    commit(types.EDIT_ITEM, payload);
  },
  deleteItem(context, item) {
    const { commit } = context;
    commit(types.DELETE_ITEM, item);
  },
  getCurrentItem(context, currentItem) {
    const { commit } = context;
    commit(types.GET_CURRENT_ITEM, currentItem);
  },
};

const mutations = {
  [types.EDIT_ITEM](state, { oldItem, newItem }) {
    const ind = state.items.findIndex(
      (i) =>
        i.title === oldItem.title &&
        i.text === oldItem.text &&
        i.color === oldItem.color
    );
    if (ind > -1) {
      state.items[ind] = newItem;
    }
  },
  [types.ADD_ITEM](state, payload) {
    if (payload.title === "" || payload.text === "") {
      alert("Please fill this feilds");
    } else {
      state.items.push(payload);
    }
  },
  [types.DELETE_ITEM](state, item) {
    const index = state.items.findIndex(
      (e) =>
        e.title === item.title && e.text === item.text && e.color === item.color
    );
    if (index > -1) {
      state.items.splice(index, 1);
    }
  },
  [types.GET_CURRENT_ITEM](state, currentItem) {
    state.currentItem = currentItem;
  },
};

export default new Vuex.Store({
  state: {
    message: "hello from app",
    items: [],
    currentItem: {
      title: "",
      text: "",
      color: "black",
    },
  },
  getters: {
    getCurrentItem(state) {
      return state.currentItem;
    },
    getItems(state) {
      return state.items;
    },
  },
  mutations,
  actions,
  modules: {},
});
