import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import Vuikit from 'vuikit'
import VuikitIcons from '@vuikit/icons'
import '../public/v2/vuikit.css'
import '@vuikit/theme/dist/vuikit.min.css'

Vue.use(Vuikit) 
Vue.use(VuikitIcons)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
