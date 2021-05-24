<template>
  <div class="container">
    <Viewer
      v-if="char.id"
      :image="image"
      :title="char.name"
      :description="char.description"
    />
  </div> 
</template>

<script>
import { mapActions } from 'vuex';
import Viewer from '../components/viewer/Viewer'

export default {
  components: {
    Viewer
  },
  data() {
    return {
      char: {}
    }
  },
  methods: {
    ...mapActions(['getChar'])
  },
  computed: {
    image() {
      const thumb = this.char.thumbnail;
      return `${thumb.path}.${thumb.extension}`
    }
  },
  async mounted() {
    this.char = await this.getChar(this.$route.params.id);
  }
}
</script>

<style lang="scss">
 
</style>