<template>
  <section class="cards" v-if="itens.length">
    <Card
      v-for="item in itens"  
      :key="item.id" 
      :item="item"
    />
  </section>
  <div v-else class="notfound">
    <h1>Content Not Found :(</h1>
  </div>
</template>

<script>
import Card from './Card';

export default {
  name: "Cards",
  props: {
    itens: Array
  },
  components: {
    Card
  }
}
</script>

<style lang="scss">
  .cards {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 10rem;

    
    @media screen and (min-width:0) {
        padding-left: 1rem;
    }

    @media screen and (min-width:576px) {
       padding: 2rem 4rem 2rem 5rem;
    }
    /* @media screen and (min-width:992px) {
      padding: 5rem 0 0 5rem; 
    }

    @media screen and (min-width:1200px) {
      padding: 3rem auto; 
    } */
  }
  .notfound {
    color: red;
    text-align: center;
    margin-bottom: 15rem;
  }
</style>