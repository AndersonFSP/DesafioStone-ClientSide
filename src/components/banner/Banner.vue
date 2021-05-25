<template>
  <section class="banner">
  </section>
</template>

<script>
import BannerImage from './BannerImage';

export default {
  name: "Banner",
  components: {
    BannerImage,
    // BannerDetail
  }
}
</script>

<style lang="scss">
  .banner {
    display: relative;
    background: url("https://primeiraesetimaarte.com.br/wp-content/uploads/2018/03/YPBnXKE.jpg") no-repeat center / cover;;
    width: 100%;
     
    @media screen and(min-width:0) {
      height: calc(100vh - 40px);
    }

    @media screen and(min-width:768px) {
      height: calc(100vh - 80px);
    }
  }
  
</style>