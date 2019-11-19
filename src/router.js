import Vue from 'vue'
import Router from 'vue-router'

import WelcomePage from './views/Pages/welcome.vue'

Vue.use(Router)

const signUp = resolve => {
  require.ensure(['./views/Auth/SignUp.vue'], () => {
    resolve(require('./views/Auth/SignUp.vue'))
  })
}

const devHector = resolve => {
  require.ensure(['./views/Pages/devHector.vue'], () => {
    resolve(require('./views/Pages/devHector.vue'))
  })
}

const devNestor = resolve => {
  require.ensure(['./views/Pages/devNestor.vue'], () => {
    resolve(require('./views/Pages/devNestor.vue'))
  })
}

const devLevi = resolve => {
  require.ensure(['./views/Pages/devLevi.vue'], () => {
    resolve(require('./views/Pages/devLevi.vue'))
  })
}

const devCarlos = resolve => {
  require.ensure(['./views/Pages/devCarlos.vue'], () => {
    resolve(require('./views/Pages/devCarlos.vue'))
  })
}

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: WelcomePage },
    { path: '/signup', name: 'sign up form', component: signUp },
    { path: '/carlos', name: 'Carlos tareas', component: devCarlos },
    { path: '/hector', name: 'Hector tareas', component: devHector },
    { path: '/nestor', name: 'Nestor tareas', component: devNestor },
    { path: '/levi', name: 'Levi tareas', component: devLevi }
  ]
})
