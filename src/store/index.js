import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios-auth'
import globalAxios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    user: null
  },
  mutations: {
    authUser (state, userData) {
      state.idToken = userData.token
      state.userId = userData.userId
    },
    storeUser (state, user) {
      state.user = user
    },
    logOutUser (state) {
      state.user = null
      state.userId = null
      state.idToken = null
    }
  },
  actions: {
    logout ({ commit }) {
      commit('logOutUser')
    },
    signup ({ commit, dispatch }, authData) {
      axios.post(`/accounts:signUp?key=${process.env.VUE_APP_FIREBASE_API_KEY}`, {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
        .then(res => {
          console.log(res)
          commit('authUser', {
            token: res.data.idToken,
            userId: res.data.localId
          })
          dispatch('storeUser', authData)
        })
        .catch(error => console.log(error))
    },
    login ({ commit }, authData) {
      return new Promise((resolve, reject) => {
        axios.post(`/accounts:signInWithPassword?key=${process.env.VUE_APP_FIREBASE_API_KEY}`, {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        })
          .then(res => {
            console.log('id', res)
            commit('authUser', {
              token: res.data.idToken,
              userId: res.data.localId
            })
            resolve(res)
          })
          .catch(error => reject(error))
      })
    },
    storeUser ({ commit, state }, userData) {
      if (!state.idToken) {
        return
      }
      globalAxios.post('/users.json' + '?auth=' + state.idToken, userData)
        .then(res => console.log(res))
        .catch(error => console.log(error))
    },
    fetchUser ({ commit, state }) {
      if (!state.idToken) {
        return
      }
      globalAxios.post(`https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${process.env.VUE_APP_FIREBASE_API_KEY}`, { idToken: state.idToken })
        .then(res => {
          console.log(res)
          commit('storeUser', res.data.users[0])
        })
        .catch(error => console.log(error))
    }
  },
  getters: {
    user (state) {
      return state.user
    }
  }
})
