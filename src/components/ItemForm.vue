<template>
  <div class="col" :style="{ height: '250px' }">
    <h1>Item</h1>
    <form class="mtb-20" action="" @submit="handleSubmit">
      <input type="text" placeholder="name of item" />
      <input class="m-5" type="number" min="1" step="any" placeholder="$ .99" />
      <label class="m-5">On Sale <input id="cb" type="checkbox" /></label>
      <button class="m-5" type="submit">Add to Cart</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      formData: {
        item: "",
        onSale: false,
      },
    };
  },
  methods: {
    handleSubmit(e) {
      console.log("submitted");
      console.log(e.target.elements[0].value, e.target.elements[2].checked);
      // this.formData.item = e.target.elements[0].value;
      // this.formData.onSale = e.target.elements[1].value;
      this.$emit("add_item", {
        name: e.target.elements[0].value,
        price: e.target.elements[1].value,
        onSale: e.target.elements[2].checked,
      });
      e.preventDefault();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-items: center;
  padding: 5px;
  width: 200px;
}
.col {
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-items: center;
  padding: 5px;
  width: 200px;
}
.m-5 {
  margin: 5px;
}
</style>
