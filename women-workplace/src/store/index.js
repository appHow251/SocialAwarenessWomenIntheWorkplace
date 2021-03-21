import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    experience: [
      {
        event: "Explained how to copy and paste",
        where: "classroom project",
        result: "Felt condescending",
        read: true
      }
    ]
  },
  mutations: {
    SAVE_EVENT(state, experiences) {
      state.experience.unshift(experiences);
    },

    MARK_READ(state, event) {
      event.read === true ? event.read === false : event.read = true;
    },

    FLIP_READ(state, readChange) {
      readChange.read = ! readChange.read;
    }
  },
  actions: {
  },
  modules: {
  }
})
