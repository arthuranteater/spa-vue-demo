<template>
  <div class="mtb-20">
    <h2>Hello {{ user }}, welcome to Juicy Jmart!</h2>
    <div v-if="user === 'guest'">
      <NameForm @add_name="addName" />
    </div>
  </div>
  <hr />
  <div style="display: flex; justify-content: center; align-items: center">
    <div :style="{ height: '250px' }">
      <h1>Cart</h1>
      <h3 v-if="items.length > 0">$ {{ sum }}</h3>
      <div style="position: relative">
        <h3
          v-if="items.length > 0"
          style="color: white; position: absolute; top: 20%; left: 50%"
        >
          {{ items.length }}
        </h3>
        <font-awesome-icon class="mtb-20" icon="shopping-cart" size="7x" />
      </div>
      <div v-if="items.length > 0">
        <button @click="handleClick">View Cart</button>
      </div>
    </div>
    <ItemForm @add_item="addItem" />
  </div>
  <Cart
    v-if="showModal"
    modalTitle="I'm a Modal"
    :items="items"
    @close_modal="closeModal"
  />
</template>

<script>
import NameForm from "./components/NameForm.vue";
import ItemForm from "./components/ItemForm.vue";
import Cart from "./components/Cart.vue";

export default {
  name: "App",
  data() {
    return {
      user: "guest",
      showModal: false,
      items: [],
      sum: 0,
    };
  },
  methods: {
    addItem(item) {
      console.log("item", item);
      this.items.push(item);
      console.log(typeof item.price);
      console.log(typeof this.sum);
      this.sum = Math.round((this.sum + parseFloat(item.price)) * 100) / 100;
      console.log("items", this.items[0]);
    },
    handleClick() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    addName(name) {
      this.user = name;
    },
  },
  components: {
    NameForm,
    ItemForm,
    Cart,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.m-5 {
  margin: 5px;
}
.mtb-20 {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
