import { marvelAxios as axios } from "../../service/axios";
import { public_key } from '../../MarvelApi';

const state = {
  characters: []
}

const getters = {
  characters: state => state.characters
}

const actions = {
  async getCharacters({ commit }, form) {
    const response =  await axios.get(`/characters`, {
      params: {
        apikey: public_key,
        // name: ""
        // limit: 30,
      }
    });
    const characters = response.data.data.results;
    console.log(characters);
    commit('setCharacters', { characters });
  },
}

const mutations = {
  setCharacters(state, { characters }) {
    state.characters = characters;
  },
}

export default  {
  state,
  getters,
  actions,
  mutations
}