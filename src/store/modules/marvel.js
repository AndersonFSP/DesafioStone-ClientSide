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
          name: "Captain America"
          // limit: 30,
        }
      });
      const data = response.data.data.results;
      console.log(data)
      // commit('setCharacters', { token, user });
  },


}

const mutations = {
  defineUserLogin(state, { token, user }) {
    state.token = token;
    state.user = user;
  },
}

export default  {
  state,
  getters,
  actions,
  mutations
}