<template>
  <div class="char-view">
    <img :src="image" class="char-view__image" alt="">
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

export default {
  name: "Show",
  components: {
    Btn
  },
  props: {
    image: String,
    title: String,
    description: String
  },
  computed: {
    content() {
      return this.description ? this.description : "No description"
    }
  }
}
</script>

<style lang="scss">
   .char-view {
    margin-top:10rem;
    display: flex;
    background-color: #333;

    border-radius: 2px;
    width: 60%;
    min-height: 80%;

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
</style>