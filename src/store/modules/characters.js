import { marvelAxios as axios } from "../../service/axios";
import { public_key } from '../../MarvelApi';

const state = {
  characters: [],
  char: {},
}

const getters = {
  characters: state => state.characters,
  char: state => state.char
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
  
  async getChar({ commit }, id) {
    const infos = {
      params: {
        apikey: public_key,
        id
      }
    }
    const response =  await axios.get(`/characters`, infos);
    const char = response.data.data.results[0];
    console.log(char)
    return char;
  },

  async getCharComics({ commit }, id) {
    const infos = {
      params: {
        apikey: public_key,
      }
    }
    const response =  await axios.get(`/characters/${id}/comics`, infos);
    const comics = response.data.data.results;
    return comics
    // retu
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