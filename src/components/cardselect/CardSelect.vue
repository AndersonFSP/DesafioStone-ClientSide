<template>
  <div class="card-select">
    <div class="card-select__imagebox">
      <img 
        class="card-select__image" 
        :src="item.image" 
        alt="movie image"
      />
    </div>
    <div class="card-select__content">
      <Btn :text="item.btn_text"></Btn>
    </div>
  </div>
</template>

<script>
import Btn from '../buttons/Btn';

export default {
  name: "CardSelect",
  components: {
    Btn
  },
  props: {
    item: Object
  }
}
</script>

<style lang="scss">
  .card-select {
    border-radius: 2%;
    display: flex;
    flex-direction: column;
    margin-bottom: 3rem;
    position: relative;
    cursor: pointer;
    

    @media screen and (min-width: 0) {
      width: calc(90% - 1.5rem);
    }
    
    @media screen and (min-width: 552px) {
      margin-right: 1rem;
      margin-left: 1rem;
      width: calc(50% - 1rem);
    }

    @media screen and(min-width:768px) {
      margin-right: 1.5rem;
      width: calc(35% - 1.5rem);
    }

    @media screen and(min-width:992px) {
      margin-right: 1.5rem;
      width: calc(25% - 1.5rem);
    }
    .card-select__imagebox {
      overflow: hidden;
      height: 350px;
    }

    .card-select__image {
      width: 100%;
      height: 350px;
      transition: all ease 0.2s;
      opacity: 0.6;

      &:hover {
        opacity: 1;
        transform: scale(1.2)
      }
    }

    .card-select__content {
      background-color: #221f1f;
      display: flex;
      justify-content: center;
      padding: 2rem;
    }
  }
</style>