import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'
import router from './router/index'

Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
  router,
  store
}).$mount('#app')
