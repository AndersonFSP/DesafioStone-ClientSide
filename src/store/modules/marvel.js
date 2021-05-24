import { marvelAxios as axios } from "../../service/axios";
import { public_key } from '../../MarvelApi';

const state = {
  characters: []
}

const getters = {
  characters: state => state.characters
}

const actions = {
  async getCharacters({ commit }, config = {}) {
    const { name, limit } = config;
    const infos = {
      params: {
        apikey: public_key,
        name,
        limit
      }
    }
    const response =  await axios.get(`/characters`, infos);
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