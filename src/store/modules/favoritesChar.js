import { mainAxios as axios } from "../../service/axios";

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
    // console.log(characters)
    commit('setCharacterFavorites', { characters });
  },

  async favorChar({ commit }, infos) {
    const { user_id } = infos;
    const { name, id_character, image } = infos; 
    const response = await axios.post(`/user/${user_id}/character/favorite`, {name, id_character, image});
    const characters = [...state.charactersFavorites, response.data];
    commit('setCharacterFavorites', { characters });
  },

  async disfavorChar({ commit }, infos) {
    const { user_id, id_character } = infos;
    const response = await axios.delete(`/user/${user_id}/character/${id_character}`);
    const characters = state.charactersFavorites.filter(character => character.id_character != id_character);
    console.log(characters)
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