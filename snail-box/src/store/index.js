import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count : 1,
  todos: [
    { id: 1, text: '...', done: true },
    { id: 2, text: '...', done: false },
    { id: 1, text: '...', done: true },
    { id: 2, text: '...', done: false }
  ]
}
const mutations = {
  add:(state, value)=>{
    state.count += value
    // console.log(getters.donetodoDone())  //Cannot read property 'todoNum' of undefined
    // console.log(getters.donetodoDone1()) // 2   此处可以调用getters和state
    // console.log(state.count)    //动态返回count
  },
  add2:(state)=>{
    state.count += 10
  },

}
const actions = {
  add1(context,value,){
    context.commit('add',value)   //调用mutations去改变 state的状态
    console.log(context.getters.donetodoDone) // 2   此处可以调用getters和state
    console.log(context.state.count)    //动态返回count
  },
  //此写法等同于上面
  // add1({commit}){
  //   commit('add',1)   //调用mutations去改变 state的状态
  //   console.log(getters.donetodoDone) // functions   此处可以调用getters和state
  //   console.log(state.count)    //动态返回count
  // }
}
const getters = {
  todoNum : (state) =>{
    return state.todos.filter(todo => todo.done == true)
  },
  donetodoDone: (state, getters) => {
    return getters.todoNum.length
  },
  donetodoDone1: (state, getters) => {
    return 100
  },
  getTodoById:(state)=>(id)=>{
    return state.todos.filter(todo => todo.id == id)
  }
}
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
