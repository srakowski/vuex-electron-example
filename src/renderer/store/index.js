import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0,
};

const getters = {
  sqrt(state) {
    return Math.sqrt(state.count);
  },
};

const mutations = {
  increment(state) {
    state.count += 1;
  },
};

const actions = {
  incrementCount(store, param) {
    // go to the google api for num
    store.commit('increment');
  },
};

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state,
  getters,
  mutations,
  actions,
})
