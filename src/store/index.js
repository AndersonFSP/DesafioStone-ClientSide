import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth';
import characters from './modules/characters';
import comics from './modules/comics';
import favorites from './modules/favorites';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    characters,
    comics,
    favorites
  }
});