<template>
  <div class="backdrop" @click.self="handleClick">
    <div class="modal">
      <h4>Your Cart</h4>
      <ol>
        <li v-for="item in items" :key="{ item }">
          <p :class="{ sale: item.onSale }">
            {{ item.name }} - {{ item.price }}
          </p>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: ["items"],
  beforeUpdate() {
    console.log(this.items);
  },
  methods: {
    handleClick() {
      this.$emit("close_modal");
    },
  },
};
</script>

<style scoped>
.modal {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background: white;
  border-radius: 10px;
}
.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
.sale {
  color: green;
}
</style>
