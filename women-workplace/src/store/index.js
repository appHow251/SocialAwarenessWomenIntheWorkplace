import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    experience: [
      {
        event: "Explained how to copy and paste",
        where: "classroom project"
      }
    ]
  },
  mutations: {
    SAVE_EVENT(state, experiences) {
      state.experience.push(experiences);
    }
  },
  actions: {
  },
  modules: {
  }
})
