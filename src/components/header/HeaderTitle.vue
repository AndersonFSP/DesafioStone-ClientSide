<template>
  <div class="cabecalho__boxtitulo">
    <router-link to="/home">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Stone_pagamentos.png/1200px-Stone_pagamentos.png" alt="">
    </router-link>
  </div>
</template>

<script>
// import ss from '../../assets/stone-logo.svg'

export default {
  name: "HeaderTitle"
}
</script>

<style lang="scss">
  .cabecalho__boxtitulo {
    img {
      width: 100px;
    }

    @media screen and(min-width:0) {
      display: none;
    }

    @media screen and(min-width: 768px) {
      display: block;
    }
  }
  
</style>