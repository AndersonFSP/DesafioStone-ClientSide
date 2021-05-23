import { mainAxios as axios } from "../../service/axios";

const state = {
  token: localStorage.getItem('token') || null,
  user: localStorage.getItem('user')
        ? JSON.parse(localStorage.getItem('user'))
        : {},   
}

const getters = {
  userLogged: state => Boolean(state.token),
  user: state => state.user
}

const actions = {
  async login({ commit }, form) {
      const response =  await axios.post('/auth/login', form);
      const { token, user } = response.data;
      console.log(response.data);
      localStorage.setItem('token', token);
      localStorage.setItem('user',JSON.stringify(user))
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
    state.user = user;
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