import Vue from 'vue'
import Router from 'vue-router'

import WelcomePage from './views/Pages/welcome.vue'

Vue.use(Router)

const signUp = resolve => {
  require.ensure(['./views/Auth/SignUp.vue'], () => {
    resolve(require('./views/Auth/SignUp.vue'))
  })
}

const searchPage = resolve => {
  require.ensure(['./views/Pages/search.vue'], () => {
    resolve(require('./views/Pages/search.vue'))
  })
}

const bookResult = resolve => {
  require.ensure(['./views/Pages/bookResult.vue'], () => {
    resolve(require('./views/Pages/bookResult.vue'))
  })
}

const Chat = resolve => {
  require.ensure(['./views/Pages/Chat.vue'], () => {
    resolve(require('./views/Pages/Chat.vue'))
  })
}

const Contact = resolve => {
  require.ensure(['./views/Pages/Contact.vue'], () => {
    resolve(require('./views/Pages/Contact.vue'))
  })
}

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: WelcomePage },
    { path: '/signup', name: 'sign up form', component: signUp },
    { path: '/contact', name: 'contact', component: Contact },
    { path: '/search', name: 'search', component: searchPage },
    {
      path: '/chat',
      name: 'chat',
      component: Chat,
      props: true,
      beforeEnter: (to, from, next) => {
        if (to.params.email) {
          next()
        } else {
          next({ name: 'home' })
        }
      }
    },
    {
      path: '/book',
      name: 'bookpage',
      component: bookResult,
      props: true,
      beforeEnter: (to, from, next) => {
        if (to.params.book) {
          next()
        } else {
          next({ name: 'home' })
        }
      }
    }
  ]
})
