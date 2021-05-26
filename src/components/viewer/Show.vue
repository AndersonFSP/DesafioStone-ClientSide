<template>
  <ShowChar
    v-if="mode == 'character'"
    :id="id"
    :image="image"
    :title="title"
    :description="description"
  />
  <ShowComic
    v-else
    :id="id"
    :image="image"
    :title="title"
    :description="description"
  />
</template>

<script>
import Btn from '../buttons/Btn';
import ShowChar from './ShowChar';
import ShowComic from './ShowComic';

export default {
  name: "Show",
  components: {
    Btn,
    ShowChar,
    ShowComic
  },
  props: {
    id: Number,
    image: String,
    title: String,
    description: String,
    mode: {
      validator: function(value) {
        return ['character', 'comic'].indexOf(value) !== -1
      }
    }
  },
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
         margin-top: 0.2rem;
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