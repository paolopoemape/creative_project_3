import Vue from 'vue'
import mock from './mock-data.js'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
export const eventBus = new Vue();

let data = {
  products: mock,
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
