<template>
  <div class="card">
    <router-link :to="{ name: pointer, params:{ id: item.id} }">
      <img class="card__image" :src="img" alt="movie image">
      <div class="card__content">
        <div class="card__title">{{ title }}</div>
      </div>
    </router-link>
  </div>
</template>

<script>

export default {
  name: "Card",
  props: {
    item: Object
  },
  computed: {
    img() {
      if(this.item.image)
        return this.item.image;
        
      const thumb = this.item.thumbnail;
      return `${thumb.path}.${thumb.extension}`
    },
    title() {
      return this.item.title? this.item.title: this.item.name;
    },
    pointer() {
      return this.item.title? "Comic": "Char";
    }
  }
}
</script>

<style lang="scss">
  .card {
    background: #c71700;
    border-radius: 1%;
    display: flex;
    transition: all ease 0.1s;
    flex-direction: column;
    margin-right: 1rem;
    margin-bottom: 2rem;
    position: relative;
    box-shadow: 5px 20px 50px rgba(0, 0, 0, 0.8);
    cursor: pointer;

    a {
      text-decoration: none;
      color:#fff;
    }

    @media screen and (min-width:0) {
       width: calc(100% - 1rem );
    }

    @media screen and (min-width:576px) {
       width: calc(50% - 1rem );
    }

    @media screen and (min-width:768px) {
      width: calc(33% - 1rem );
    }

    @media screen and (min-width:992px) {
      width: calc(25% - 1rem );
    }

    @media screen and (min-width:1200px) {
      width: calc(20% - 1rem);
    }

    &:hover {
        background: #3d2b1f54;
        transform: translatey(3px);
        opacity: 0.7;
        box-shadow: none;
    }

    .card__image {
      width: 100%;
      height: 310px;
    }

    .card__content {
      margin-left: 1rem;
      padding: 1rem 0 1rem 0; 
    }
  }
</style>