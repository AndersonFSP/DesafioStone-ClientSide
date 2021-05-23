import { mainAxios as axios } from "../../service/axios";

const state = {
  token: localStorage.getItem('token') || null,
  user: {}   
}

const getters = {
  userLogged: state => Boolean(state.token) 
}

const actions = {
  async login({ commit }, form) {
      const response =  await axios.post('/auth/login', form);
      const { token, user } = response.data;
      console.log(response.data);
      localStorage.token = token;
      commit('defineUserLogin', { token, user });
  },

  async createUser({ commit }, form) {
      const response = await axios.post('/users', form);
      console.log(response)
  }
}

const mutations = {
  defineUserLogin(state, { token, user }) {
    state.token = token;
    state.user = user.name;
  },
  logout(state) {
    localStorage.removeItem("token")
    state.token = null,
    state.user = {}
  }
}

export default  {
  state,
  getters,
  actions,
  mutations
}