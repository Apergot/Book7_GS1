import Vue from 'vue'
import Router from 'vue-router'

import WelcomePage from './views/Pages/welcome.vue'

Vue.use(Router)

const SignUp = resolve => {
  require.ensure(['./views/Auth/SignUp.vue'], () => {
    resolve(require('./views/Auth/SignUp.vue'))
  })
}

const SignIn = resolve => {
  require.ensure(['./views/Auth/SignIn.vue'], () => {
    resolve(require('./views/Auth/SignIn.vue'))
  })
}

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: WelcomePage },
    { path: '/signup', name: 'sign up', component: SignUp },
    { path: '/signin', name: 'sign in', component: SignIn }
  ]
})
