import { mainAxios as axios } from "../../service/axios";
import router from '../../router/index';

const state = {
  token: null,
  user: {}   
}

const getters = {
  user: state => state.user
}

const actions = {
  async login({ commit }, form) {
    try {
      const response =  await axios.post('/auth/login', form);
      const { token, user } = response.data;
      console.log(response.data);
      localStorage.token = token;
      commit('defineUserLogin', { token, user });
      
    }catch(e) {
      throw new Error("Error")
    } 
  },

  async createUser({ commit }, form) {
    try {
      console.log(form)
      const response = await axios.post('/users', form);
      console.log(response)
      router.push({ name: "Login" })
    }catch(e) {
      console.log(e)
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