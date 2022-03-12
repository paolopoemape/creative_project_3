
import Vue from 'vue'
import mock from './mock-data.js'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faScissors, faMagnifyingGlass, faMap } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueGeolocation from 'vue-browser-geolocation'
Vue.config.productionTip = false
export const eventBus = new Vue();
import * as VueGoogleMaps from 'vue2-google-maps'
// require('dotenv').config();
Vue.use(BootstrapVue)

Vue.use(VueGeolocation)
Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_MY_ENV_VARIABLE
  }
})
library.add(faUserSecret,faScissors, faMagnifyingGlass, faMap )

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

let data = {
  stores: mock,
  cart: [],
  clicks: 0,
  id:'',
  arr: {}
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
