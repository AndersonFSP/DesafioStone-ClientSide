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
    commit('setCharacterFavorites', { characters })
  },

  async favor({ commit }, infos) {
    const { user_id } = infos;
    const { name, id_character } = infos; 
    const response = await axios.post(`/user/${user_id}/character/favorite`, {name, id_character});
    state.charactersFavorites.push(response.data);
  }
}

const mutations = {
  setCharacterFavorites(state, { characters }) {
    state.charactersFavorites = characters;
  }
}


export default  {
  state,
  getters,
  actions,
  mutations
}