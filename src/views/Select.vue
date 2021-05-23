<template>
  <div class="container">
    <CardsSelect :itens="itens" />
  </div>
</template>

<script>
import Btn from '../components/buttons/Btn';
import CardsSelect from '../components/cardselect/CardsSelect';

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
          link: "",
          btn_text: "View hqs" 
        },
         {
          image: "https://wallpaperaccess.com/full/2931065.jpg",
          link: "",
          btn_text: "View Characters" 
        }
      ]
    }
  }
}
</script>

<style lang="scss">
</style>