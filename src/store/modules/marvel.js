import { marvelAxios as axios } from "../../service/axios";
import { public_key } from '../../MarvelApi';

const state = {
  characters: [],
  comics: [],
}

const getters = {
  characters: state => state.characters,
  comics: state => state.comics
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
  
  async getComics({ commit }, config = {}) {
    const { name, limit } = config;
    const infos = {
      params: {
        apikey: public_key,
        name,
        limit
      }
    }
    const response =  await axios.get(`/comics`, infos);
    const comics = response.data.data.results;
    console.log(comics);
    commit('setComics', { comics });
  },
}

const mutations = {
  setCharacters(state, { characters }) {
    state.characters = characters;
  },
  setComics(state, { comics }) {
    state.comics = comics;
  },
}


export default  {
  state,
  getters,
  actions,
  mutations
}