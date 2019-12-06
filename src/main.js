import Vue from 'vue'
import VueChatScroll from 'vue-chat-scroll'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueResource from 'vue-resource'
import VueCarousel from 'vue-carousel'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faFacebookF, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faMapMarkerAlt, faEnvelope, faPhone, faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faTwitter, faFacebookF, faGithub, faLinkedin, faMapMarkerAlt, faEnvelope, faPhone, faLink)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueChatScroll)
Vue.use(BootstrapVue)
Vue.use(VueResource)
Vue.use(VueCarousel)
Vue.config.productionTip = false

axios.defaults.baseURL = 'https://vue-firebase-tut-6ec5a.firebaseio.com'
axios.defaults.headers.get['Accepts'] = 'application/json'

const reqInterceptor = axios.interceptors.request.use(config => {
  console.log('Request Interceptor', config)
  return config
})

const resInterceptor = axios.interceptors.response.use(res => {
  console.log('Response Interceptor', res)
  return res
})

axios.interceptors.request.eject(reqInterceptor)
axios.interceptors.response.eject(resInterceptor)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
