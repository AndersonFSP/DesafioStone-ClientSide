<template>
  <div class="cards-select">
    <CardSelect 
      v-for="(item, index) in itens" 
      :key="index" 
      :item="item"
    />
  </div>  
</template>

<script>
import CardSelect from './CardSelect';

export default {
  name: "CardsSelect",
  components: {
    CardSelect
  },
  props: {
    itens: Array
  }
}
</script>

<style lang="scss">
  .cards-select {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 8rem;
    margin-right:0px ;
  }
</style>