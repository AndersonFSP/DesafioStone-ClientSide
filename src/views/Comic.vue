<template>
  <div class="container">
    <Viewer
      v-if="comic.id"
      :image="image"
      :title="comic.title"
      :description="comic.description"
    />
  </div> 
</template>

<script>
import { mapActions } from 'vuex';
import Viewer from '../components/viewer/Show'

export default {
  components: {
    Viewer
  },
  data() {
    return {
      comic: {}
    }
  },
  methods: {
    ...mapActions(['getComic'])
  },
  computed: {
    image() {
      const thumb = this.comic.thumbnail;
      return `${thumb.path}.${thumb.extension}`
    }
  },
  async mounted() {
    this.comic = await this.getComic(this.$route.params.id);
  }
}
</script>

<style lang="scss">
 
</style>