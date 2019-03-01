import Vue from 'vue'
import VueRouter from 'vue-router'
const routes = [{
    path: '/',
    components:()=>import('@/views/home/index.vue')
}]
Vue.use(VueRouter)
export default new VueRouter({
    routes
})