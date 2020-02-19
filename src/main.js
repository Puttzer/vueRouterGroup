import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import json from './assets/books.json'

new Vue({
  router,
  data: () => ({
    books: json.books
  }),

  render: h => h(App)
}).$mount('#app')
