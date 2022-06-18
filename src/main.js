import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


// import Vue from 'vue'
// import App from '@App' 
// const vm = new Vue({
// render:(h)=>(App)
// })
// vm.$mount('#app')