<template>
  <header class="cabecalho">
    <HeaderTitle/>
    <HeaderLoggedOut v-if="!userLogged"/>
    <HeaderLogged v-else/>
  </header>
</template>

<script>
import HeaderTitle from './HeaderTitle';
import HeaderLoggedOut from './headerLoggedOut';
import HeaderLogged from './HeaderLogged';
import { mapGetters } from 'vuex'

export default {
  name: "AppHeader",
  components: {
    HeaderTitle,
    HeaderLoggedOut,
    HeaderLogged
  },
  computed: {
    ...mapGetters(['userLogged'])
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