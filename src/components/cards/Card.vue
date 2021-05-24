<template>
  <div class="card">
    <img class="card__image" :src="img" alt="movie image">
    <div class="card__content">
      <div class="card__title">{{ item.name }}</div>
    </div>
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
      const thumb = this.item.thumbnail;
      return `${thumb.path}.${thumb.extension}`
    }
  }
}
</script>

<style lang="scss">
  .card {
    background: #c71700;
    border-radius: 2%;
    display: flex;
    transition: all ease 0.1s;
    flex-direction: column;
    margin-right: 1rem;
    margin-bottom: 2rem;
    position: relative;
    cursor: pointer;

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

    &:hover {
        background: #3d2b1f54;
        transform: translatey(3px);
        opacity: 0.7;

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