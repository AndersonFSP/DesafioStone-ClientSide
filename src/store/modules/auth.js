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
    const response =  await axios.post('/auth', profile);
    const { token, user } = response.data;
    console.log(response)
    commit('defineUserLogin', { token, user })
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