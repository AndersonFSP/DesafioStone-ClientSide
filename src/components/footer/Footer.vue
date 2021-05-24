<template>
  <footer>
    <h2>
      <a href="https://github.com/AndersonFSP" target="_blank">AndersonFSP@github</a> 
    </h2> 
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  footer {
    background-color: #333;
    height: 5rem;
    text-align: center;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;

    h2 {
      padding: 25px;
    }

    a {
      color: #fff;
      text-decoration: none;
      transition: all ease-in-out 0.2s;

      &:hover {
        color: red;
      }
    }
  }
</style>