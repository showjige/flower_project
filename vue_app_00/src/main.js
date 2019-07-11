import Vue from 'vue'
import App from './App.vue'
import router from './router'

//引入axios.js文件
import axios from "./axios"


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


