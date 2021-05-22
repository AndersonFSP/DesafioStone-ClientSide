<template>
  <div class="form-group">
    <label>{{ label }}</label>
    <slot></slot>
    <!-- <div style="font-size:0.8em;" v-if="menssagemErro && erro">{{ menssagemErro }}</div> -->
  </div>
</template>

<script>
export default {
  name: "FormGroup",
  props: {
    label: {
      type: String,
      default: "label"
    }
  }
}
</script>

<style lang="scss">
  .form-group {
    display: flex;
    flex-direction : column;
    margin: 0 2rem 0.8rem 2rem;
 }

 label {
   margin-bottom: 0.1rem;
 }
</style>