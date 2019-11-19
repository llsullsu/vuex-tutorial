
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
    fullName: 'ณัฐวุฒิ สิงหะตา',
    position: 'นักวิชาการคอมพิวเตอร์ปฏิบัติการ'
  },
  mutations: {
    setFullName: (state, fullName) => {
      state.fullName = fullName     // assign
    },
    setPosition: (state, position) => {
      state.position = position
    }
  },
  getters: {
    fullName: state => state.fullName,
    position: state => state.position
  }
})
