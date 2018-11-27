const state = () => ({
  posts: [],
  singlePost:{}
})
const getters = {}

const mutations = {
  SET_POSTS(state, payload){
    state.posts = payload
  },
  SET_POST(state, payload){
    state.singlePost = Object.assign({}, state.singlePost, payload)
  },
  SAVE_POST(state, payload){
    state.posts.push(payload)
  }
}

const actions = {
  setPosts({commit}, payload){
    commit('SET_POSTS', payload)
  },
  setPost({ commit }, payload) {
    commit('SET_POST', payload)
  },
  async savePost({commit}, payload){
    const {data} = await this.$axios.post('/posts', payload);
    commit('SAVE_POST', data);
  }
}

const postModule = {
  state,
  getters,
  mutations,
  actions
}
export default postModule
