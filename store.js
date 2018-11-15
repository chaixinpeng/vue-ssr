/* store.js */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default function createStore() {
      let store =  new Vuex.Store({
            state: {
                  homeInfo: ''
            },
            actions: {
                  getHomeInfo({ commit }) {
                        return axios.get('http://localhost:5555/api/getHomeInfo').then((res) => {
                              commit('setHomeInfo', res.data)
                        })
                  }
            },
            mutations: {
                  setHomeInfo(state, res) {
                        state.homeInfo = res
                  }
            }
      })

      return store
}