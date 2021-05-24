<template>
  <section class="search">
    <Search @search="onSearch" searching="characters"/>
    <Cards :itens="characters"/>
    <div class="see-more">
      <Btn text="See more"></Btn>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Search from '../components/search/Search';
import Cards from '../components/cards/Cards';
import Btn from '../components/buttons/Btn';

export default {
  components: {
    Search,
    Cards,
    Btn
  },

  computed: {
    ...mapGetters(['characters']),
  },

  methods: {
    ...mapActions(['getCharacters']),

    onSearch(value) {
      console.log(value)
    }
  },

  mounted() {
    this.getCharacters();
  }
}
</script>
<style lang="scss">
  .see-more {
    display: flex;
    justify-content: center;
  }
</style>
