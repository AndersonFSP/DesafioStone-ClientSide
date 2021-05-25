<template>
  <div class="container" style="flex-direction: column;">
    <Show
      v-if="char.id"
      :image="image"
      :title="char.name"
      :description="char.description"
    />
    <h2 class="char-is-present">is present in ...</h2>
    <Cards v-if="comics.length" :itens="comics"/>
  </div> 
</template>

<script>
import { mapActions } from 'vuex';
import Show from '../components/viewer/Show'
import Cards from '../components/cards/Cards';

export default {
  components: {
    Show,
    Cards
  },
  data() {
    return {
      char: {},
      comics: []
    }
  },
  methods: {
    ...mapActions(['getChar', 'getCharComics'])
  },
  computed: {
    image() {
      const thumb = this.char.thumbnail;
      return `${thumb.path}.${thumb.extension}`
    }
  },
  async mounted() {
    this.char = await this.getChar(this.$route.params.id);
    this.comics = await this.getCharComics(this.$route.params.id);
  }
}
</script>

<style lang="scss">
 .char-is-present {
   margin-top:2rem;
 }
</style>