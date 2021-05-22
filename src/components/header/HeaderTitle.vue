<template>
  <div class="cabecalho__boxtitulo">
    <router-link to="/">
      <h1>Desafio</h1>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "HeaderTitle"
}
</script>

<style lang="scss">
  .cabecalho__boxtitulo {
    background-color: #333;
    border-radius: 3%;
    padding: 4px;
    font-size: 0.8rem;
    text-transform: uppercase;

    a {
      text-decoration: none;
    }

    h1 {
      color: #fff;
    }

    @media screen and(min-width:0) {
      display: none;
    }

    @media screen and(min-width: 768px) {
      display: block;
    }
  }
</style>