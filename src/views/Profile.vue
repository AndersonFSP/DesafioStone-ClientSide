<template>
  <div class="container" style="flex-direction: column;">
    <Accounts :user="user"/>
    <h2 class="favorites-text">Favorites</h2>
    <div class="btn-favorites-area">
      <div class="view-btn-favorites">
        <Btn text="comics" @click.native="choice = 'comics'"/>
      </div>
      <div class="view-btn-favorites">
        <Btn text="characters" @click.native="choice = 'characters'"/>
      </div>
    </div>
    <Cards v-if="itens.length" :itens="itens"/>
  </div>
</template>

<script>
import Accounts from '../components/accounts/Accounts';
import Cards from '../components/cards/Cards';
import { mapGetters } from 'vuex';
import Btn from '../components/buttons/Btn';

export default {
  components: {
    Accounts,
    Cards,
    Btn
  },
  data() {
    return {
      choice: ""
    }
  },
  computed: {
   ...mapGetters(['user', 'charactersFavorites', 'comicsFavorites']),

   itens() {
    let itens = [];
    if(this.choice == "characters") {
      itens = this.charactersFavorites.map(char => {
          char.id = char.id_character;
          return char
       });

    } else if(this.choice == "comics") {
      itens = this.comicsFavorites.map(char => {
          char.id = char.id_comic;
          return char
       });
    }
 
    return itens;
   },
  },
}
</script>
<style lang="scss">
  .btn-favorites-area {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;

    .view-btn-favorites {
      padding: 1rem;
    }
  }
  .favorites-text {
    margin-top: 3rem;
  }
</style>

