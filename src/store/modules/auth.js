import { mainAxios as axios } from "../../service/axios";

const state = {
  token: null,
  user: {}   
}

const getters = {
  user: state => state.user
}

const actions = {
  async login({ commit }, profile) {
    try {
      const response =  await axios.post('/auth', profile);
      const { token, user } = response.data;
      console.log(response.data)
      localStorage.token = token;
      commit('defineUserLogin', { token, user })
      return false;
    }catch(e) {
      return true;
    } 
  }
}

const mutations = {
  defineUserLogin(state, { token, user }) {
    state.token = token;
    state.user = user;
  }
}

export default  {
  state,
  getters,
  actions,
  mutations
}