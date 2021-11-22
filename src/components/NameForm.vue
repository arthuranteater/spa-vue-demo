<template>
  <form>
    <input type="text" placeholder="name" ref="input" />
    <button @click="handleClick">Login</button>
  </form>
</template>

<script>
export default {
  name: "NameForm",
  props: {
    msg: String,
  },
  data() {
    return {
      msg2: "this is a data msg",
    };
  },
  methods: {
    handleClick() {
      // console.log(this.$refs.input);
      this.$emit("add_name", this.$refs.input.value);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
h1 {
  color: purple;
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
</style>
