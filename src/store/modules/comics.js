import { marvelAxios as axios } from "../../service/axios";
import { public_key } from '../../MarvelApi';

const state = {
  comics: [],
}

const getters = {
  comics: state => state.comics,
}

const actions = {
  async getComics({ commit }, config = {}) {
    const { title, limit } = config;
    const infos = {
      params: {
        apikey: public_key,
        title,
        limit
      }
    }
    const response =  await axios.get(`/comics`, infos);
    const comics = response.data.data.results;
    console.log(comics);
    commit('setComics', { comics });
  },

  async getComic({ commit }, id) {
    const infos = {
      params: {
        apikey: public_key,
        id
      }
    }
    const response =  await axios.get(`/comics`, infos);
    const comic = response.data.data.results[0];
    return comic;
  },

  async getComicCharacters({ commit }, id) {
    const infos = {
      params: {
        apikey: public_key,
      }
    }
    const response =  await axios.get(`/comics/${id}/characters`, infos);
    const characters = response.data.data.results;
    return characters;
  },
}

const mutations = {
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