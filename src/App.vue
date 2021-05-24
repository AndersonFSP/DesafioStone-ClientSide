<template>
  <div id="app">
    <Header/>
      <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

export default {
  components:{
    Header,
    Footer
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
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .see-more {
    display: flex;
    justify-content: center;
  }
</style>
