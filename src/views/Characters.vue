<template>
  <section class="search">
    <Search @search="onSearch" searching="characters"/>
    <Cards :itens="characters"/>
    <div class="see-more">
      <Btn 
        v-if="characters.length" 
        text="See more"
        @click.native="seeMore"
      />
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
  data() {
    return {
      limit: 20,
    }
  },

  computed: {
    ...mapGetters(['characters']),
  },

  methods: {
    ...mapActions(['getCharacters']),

    onSearch(value) {
      let filter = { limit: this.limit };
      if(value)
        filter = {name: value};
      this.getCharacters(filter)
    },

    seeMore() {
      this.limit = this.limit + 4; 
      this.getCharacters({ limit: this.limit  })
    }
  },

  mounted() {
    this.getCharacters({ limit: this.limit });
  }
}
</script>
<style lang="scss">
  .see-more {
    display: flex;
    justify-content: center;
  }
</style>
