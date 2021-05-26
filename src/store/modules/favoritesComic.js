import { mainAxios as axios } from "../../service/axios";

const state = {
  comicsFavorites: localStorage.getItem('comicsFavorites')
                       ? JSON.parse(localStorage.getItem('comicsFavorites'))
                       : [],
}

const getters = {
  comicsFavorites: state => state.comicsFavorites,
}

const actions = {
  async getComicsFavorites({ commit }, user_id) {
    const response = await axios.get(`/user/${user_id}/comic/favorite`);
    const comics = response.data;
    localStorage.setItem('comicsFavorites', JSON.stringify(comics));
    // console.log(comics)
    commit('setComicsFavorites', { comics });
  },

  async favorComic({ commit }, infos) {
    const { user_id } = infos;
    const { title, id_comic, image } = infos; 
    console.log(infos)
    const response = await axios.post(`/user/${user_id}/comic/favorite`, {title, id_comic, image});
    const comics = [...state.comicsFavorites, response.data];
    commit('setComicsFavorites', { comics });
  },

  async disfavorComic({ commit }, infos) {
    const { user_id, id_comic } = infos;
    await axios.delete(`/user/${user_id}/comic/${id_comic}`);
    const comics = state.comicsFavorites.filter(comic => comic.id_comic != id_comic);
    commit('setComicsFavorites', { comics });
  },
}

const mutations = {
  setComicsFavorites(state, { comics }) {
    localStorage.setItem('comicsFavorites', JSON.stringify(comics));
    state.comicsFavorites = comics;
  }
}


export default  {
  state,
  getters,
  actions,
  mutations
}