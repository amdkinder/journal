import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuesax from 'vuesax'

Vue.config.productionTip = false

import 'vuesax/dist/vuesax.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
Vue.use(Vuesax, {})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
