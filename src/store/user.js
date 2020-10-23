const state = function() {
  return {
    message: ''
  };
};

const getters = {
  internalMessage: state => state.message
};

const mutations = {
  setMessage(state, value) {
    state.message = value;
  }
};

const actions = {
  setMessage({ commit }, value) {
    commit('setMessage', value);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
