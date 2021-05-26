import { mainAxios as axios } from "../../service/axios";
import { public_key } from '../../MarvelApi';

const state = {
  charactersFavorites: localStorage.getItem('charactersFavorites')
                       ? JSON.parse(localStorage.getItem('charactersFavorites'))
                       : [],
}

const getters = {
  charactersFavorites: state => state.charactersFavorites,
}

const actions = {
  async getCharacterFavorites({ commit }, user_id) {
    const response = await axios.get(`/user/${user_id}/character/favorite`);
    const characters = response.data;
    localStorage.setItem('charactersFavorites', JSON.stringify(characters));
    console.log(characters)
    commit('setCharacterFavorites', { characters });
  },

  async favor({ commit }, infos) {
    const { user_id } = infos;
    const { name, id_character } = infos; 
    const response = await axios.post(`/user/${user_id}/character/favorite`, {name, id_character});
    state.charactersFavorites.push(response.data);
  },

  async disfavor({ commit }, infos) {
    const { user_id, id_character } = infos;
    await axios.delete(`/user/${user_id}/character/${id_character}`, {name, id_character});
    const characters = state.charactersFavorites.filter(character => character.id_character != id_character);
    commit('setCharacterFavorites', { characters });
  },
}

const mutations = {
  setCharacterFavorites(state, { characters }) {
    localStorage.setItem('charactersFavorites', JSON.stringify(characters));
    state.charactersFavorites = characters;
  }
}


export default  {
  state,
  getters,
  actions,
  mutations
}