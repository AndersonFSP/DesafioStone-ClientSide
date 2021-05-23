<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/header/Header';
import store from './store/modules/auth';

export default {
  components:{
    Header
  },

}
</script>

<style lang="scss">
  * {
    margin:0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Fira Sans", sans-serif;
  }

  body {
    background-color: #111111;
    color: #fff;
  }
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
