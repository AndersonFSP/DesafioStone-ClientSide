<template>
  <header class="cabecalho">
    <HeaderTitle/>
    <HeaderLoggedOut/>
  </header>
</template>

<script>
import HeaderTitle from './HeaderTitle';
import HeaderLoggedOut from './headerLoggedOut';

export default {
  name: "AppHeader",
  components: {
    HeaderTitle,
    HeaderLoggedOut
  }
}
</script>

<style lang="scss">
   .cabecalho {
    display: flex;
    background-color: #fff;
    padding: 0.8rem 0;
    align-items: center;
    padding-left: 2rem;
    padding-right: 2rem;

    @media screen and(min-width: 0) {
      justify-content: center;
    }

    @media screen and(min-width: 768px) {
      justify-content: space-between;
    }
  }
</style>