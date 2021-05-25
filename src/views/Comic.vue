<template>
  <div class="container" style="flex-direction: column;">
    <Show
      v-if="comic.id"
      :image="image"
      :title="comic.title"
      :description="comic.description"
    />
    <h2 class="char-is-present">Appearances ...</h2>
    <Cards v-if="characters.length" :itens="characters"/>
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
      comic: {},
      characters: []
    }
  },
  methods: {
    ...mapActions(['getComic', 'getComicCharacters'])
  },
  computed: {
    image() {
      const thumb = this.comic.thumbnail;
      return `${thumb.path}.${thumb.extension}`
    }
  },
  async mounted() {
    this.comic = await this.getComic(this.$route.params.id);
    this.characters = await this.getComicCharacters(this.$route.params.id);
  }
}
</script>

<style lang="scss">
 
</style>