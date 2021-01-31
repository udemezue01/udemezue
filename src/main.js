import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import '@/assets/css/tailwinds.css'

import VueMeta from 'vue-meta'

import apolloProvider from './apollo'




Vue.use(VueMeta)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
