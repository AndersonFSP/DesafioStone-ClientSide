<template>
  <input 
    type="text" 
    class="btn" 
    :placeholder="placeholder" 
    name="search" 
    @input="handleInput($event.target.value)"
   />
</template>

<script>
export default {
  name: "CustomInput",
  props: {
    value: {},
    placeholder: String
  },
  methods: {
    handleInput(value) {
      this.$emit("input", value)
    }
  }
}
</script>

<style lang="scss">
   input.btn {
    padding: 12px 20px;
    margin: 8px 0;
    border: 1px solid rgb(122, 118, 118);
    border-radius: 4px;
  }
</style>