import Vue from 'vue'
import Router from 'vue-router'

import WelcomePage from './components/Pages/welcome.vue'

Vue.use(Router)

const SignUp = resolve => {
  require.ensure(['./components/Auth/SignUp.vue'], () => {
    resolve(require('./components/Auth/SignUp.vue'))
  })
}

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: WelcomePage },
    { path: '/signup', name: 'sign up', component: SignUp }
  ]
})
