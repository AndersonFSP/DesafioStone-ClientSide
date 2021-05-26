import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth';
import characters from './modules/characters';
import comics from './modules/comics';
import favoritesChar from './modules/favoritesChar';
import favoritesComic from './modules/favoritesComic';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    characters,
    comics,
    favoritesChar,
    favoritesComic
  }
});