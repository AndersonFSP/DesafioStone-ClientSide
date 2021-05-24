<template>
  <section class="search">
    <Search @search="onSearch" searching="comics"/>
    <Cards :itens="comics"/>
    <div class="see-more">
      <Btn 
        v-if="comics.length" 
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
    ...mapGetters(['comics']),
  },

  methods: {
    ...mapActions(['getComics']),

    onSearch(value) {
      let filter = { limit: this.limit };
      if(value)
        filter = {title: value};
      this.getComics(filter)
    },

    seeMore() {
      this.limit = this.limit + 4; 
      this.getComics({ limit: this.limit  })
    }
  },

  mounted() {
    if(!this.comics.length)
      this.getComics({ limit: this.limit });
  }
}
</script>
<style lang="scss">
</style>
