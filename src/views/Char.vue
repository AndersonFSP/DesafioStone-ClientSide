<template>
  <div class="container" style="flex-direction: column;">
    <Viewer
      v-if="char.id"
      :image="image"
      :title="char.name"
      :description="char.description"
    />
    <h1 class="char-is-present">is present in ...</h1>
    <Cards v-if="comics.length" :itens="comics"/>
  </div> 
</template>

<script>
import { mapActions } from 'vuex';
import Viewer from '../components/viewer/Show'
import Cards from '../components/cards/Cards';

export default {
  components: {
    Viewer,
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