import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './plugins/rotues'
import App from './App.vue'
import vuetify from './plugins/vuetify';

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
