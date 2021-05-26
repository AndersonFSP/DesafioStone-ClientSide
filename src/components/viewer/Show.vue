<template>
  <div class="char-view">
    <img :src="image" class="char-view__image" alt="">
    <div :class="'char-view__favorite '+ favoriteStyle">
      <button @click="favItem">
        <i  :class="'fa fa-heart '"></i>
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
  name: "Show",
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
    ...mapGetters(['user', 'charactersFavorites']),

    content() {
      return this.description ? this.description : "No description"
    },
    favoriteStyle() {
      return this.favorite ? "favorite" : "";
    }
  },
  methods: {
    ...mapActions(['favor']),

    favItem() {
      if(!this.favorite) {
        const body = {
          user_id: this.user.id,
          name: this.title,
          id_character: this.id
        }
        try {
          this.favor(body);
          this.favorite = !this.favorite
        }catch(e) {
          console.log(e)
        }
      }
    }
  },
  mounted() {
    const favorite = this.charactersFavorites.filter(character => character.id_character == this.id);
    this.favorite = Boolean(favorite[0]);
  }
}
</script>

<style lang="scss">
   .char-view {
    background-color: #333;
    border-radius: 2px;
    display: flex;
    margin-top:10rem;
    min-height: 80%;
    position:relative;
    width: 60%;

    &:hover > .char-view__favorite {
      display: block;
    }
    @media screen and(min-width:0) {
      flex-direction: column;
    }
    @media screen and(min-width:768px) {
      flex-direction: row;
      width: 60%;
      min-height: 80%;
      /* height: 450px; */
    }
    @media screen and(min-width:992px) {
      width: 60%;
      min-height: 80%;
      /* height: 400px; */
    }
  }

  .char-view__image { 
    border-radius: 2px;

    @media screen and(min-width:0) {
      width: 100%;
    }
    @media screen and(min-width:768px) {
      width: 40%;
    }
  }

  .char-view__content {
    padding: 1rem 2rem 2rem 2em;
    
    h3 {
     
      min-height: 60%;
      @media screen and(min-width:0) {
        margin-top: 0;
      }
      @media screen and(min-width:768px) {
         margin-top: 4rem;
      }
    }
    .char-view__return {
      display: flex;
      justify-content: center;
    }
  }
  .char-view__favorite {
    background-color: #333;
    cursor: pointer;
    padding: 10px;
    position: absolute;
    display:none;
    border-radius: 50%;
    transition: all ease-in 2s;

    button {
      border: none;
      background-color: Transparent;
      cursor: pointer;
    }

    i {
      margin: 3px 2px 2px 2px;
      font-size:1.5rem;
    }
  }
  .favorite{ 
    display: block;

    i{
      font-size: 2.5rem;
      color:red;
    }
  }
</style>