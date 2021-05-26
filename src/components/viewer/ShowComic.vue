<template>
  <div class="char-view">
    <img :src="image" class="char-view__image" alt="">
    <div :class="'char-view__favorite '+ favoriteStyle">
      <button @click="favItem">
        <i :class="'fa fa-heart '"></i>
      </button> 
    </div>
    <div class="char-view__content"> 
      <h2>{{title}}</h2>
      <h3>{{content}}</h3>
      <div class="char-view__return">
        <Btn text="back" @click.native="$router.go(-1)"/>
      </div>
    </div> 
  </div>
</template>

<script>
import Btn from '../buttons/Btn';
import { mapActions, mapGetters } from 'vuex'; 

export default {
  name: "ShowChar",
  components: {
    Btn
  },
  props: {
    id: Number,
    image: String,
    title: String,
    description: String
  },
  data() {
    return {
      favorite: false
    }
  },
  computed: {
    ...mapGetters(['user', 'comicsFavorites']),

    content() {
      return this.description ? this.description : "No description"
    },
    favoriteStyle() {
      return this.favorite ? "favorite" : "";
    }
  },
  methods: {
    ...mapActions(['favorComic', 'disfavorComic']),

    favItem() {
      if(!this.favorite) {
        const body = {
          user_id: this.user.id,
          title: this.title,
          id_comic: this.id
        }
        try {
          this.favorComic(body);
          this.favorite = !this.favorite
        }catch(e) {
          console.log(e)
        }
      }
      else {
        this.disfavItem() 
      }
    },

    disfavItem() {
      const body = {
        user_id: this.user.id,
        id_comic: this.id
      }
      this.disfavorComic(body);
      this.favorite = !this.favorite
    }
  },
  mounted() {
    const favorite = this.comicsFavorites.filter(comics => comics.id_comic == this.id);
    this.favorite = Boolean(favorite[0]);
  }
}
</script>

<style lang="scss">

</style>