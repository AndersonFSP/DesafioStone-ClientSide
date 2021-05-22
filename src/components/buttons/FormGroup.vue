<template>
  <div :class="{'form-group': true, 'erro': erro}">
    <label>{{ label }}</label>
    <slot></slot>
    <div style="font-size:0.8em;" v-if="menssagemErro && erro">{{ menssagemErro }}</div>
  </div>
</template>

<script>
export default {
  name: "FormGroup",
  props: {
    label: {
      type: String,
      default: "label"
    },
    hasError: {
      type: Boolean,
    },
    menssagemErro: {
      type: String,
    }
  },
  computed: {
    erro() {
      return this.hasError ? 'erro': '';  
    }
  }
}
</script>

<style lang="scss">
  .form-group {
    display: flex;
    flex-direction : column;
    margin: 0 2rem 1.5rem 2rem;
 }

 label {
   margin-bottom: 0.1rem;
 }

 .erro {
   color: tomato;
    & input {
      border-color:tomato;
    }
 }
</style>