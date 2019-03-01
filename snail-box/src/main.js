import Vue from 'vue'
import router from '@/router'
import store from '@/store'
import http from '@/http'
import constant from '@/constant'
import Layout from '@/components/layout'
import $ from '@/common/jquery'
import '@/stylesheet'
console.log(22222)
if (__isWap) {  // eslint-disable-line no-undef
  require('@/common/flexible')
}

Vue.use(http)
Vue.use(constant)

const app = new Vue({
  router,
  store,
  render: h => <Layout />
})

app.$mount('#app')
