<template>
  <div class="container">
    <CardsSelect :itens="itens" />
  </div>
</template>

<script>
import Btn from '../components/buttons/Btn';
import CardsSelect from '../components/cardselect/CardsSelect';
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    Btn,
    CardsSelect
  },
  data() {
    return {
      itens: [
        {
          image: "https://i.pinimg.com/originals/80/80/3b/80803b099fec4542ac3e070cd8078cf8.jpg",
          link: "/comics",
          btn_text: "View comics" 
        },
         {
          image: "https://wallpaperaccess.com/full/2931065.jpg",
          link: "/characters",
          btn_text: "View Characters" 
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['user', 'charactersFavorites', 'comicsFavorites']),
  },
  methods: {
    ...mapActions(['getCharacterFavorites', 'getComicsFavorites'])
  },
  mounted() {
    if(!this.charactersFavorites.length)
      this.getCharacterFavorites(this.user.id);

    if(!this.comicsFavorites.length)
      this.getComicsFavorites(this.user.id);
  }
}
</script>

<style lang="scss">
</style>