<template>
  <button type="submit" class="btn-submit">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "Btn",
  props: {
    text: {
      type: String,
      default: "Text"
    }
  }
}
</script>

<style lang="scss">
  .btn-submit {
    background-color: #e00f00;
    border: none;
    color: #fff;
    cursor: pointer;
    font-size: 1.125rem;
    min-width: 200px;
    text-transform: uppercase;
    text-align: center;
    padding: 0.5rem 0 0.5rem 0;
    transition: all ease-in-out 0.2s;

    &:hover {
      background-color: #b40c00;
    }
  }
</style>