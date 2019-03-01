
import '@/style'
import '@/script/common.js'
import './common1.js'
import $ from 'jquery'
import Icon from '../images/s-h.jpg'
import Vue from 'vue'
import router from '@/router/index.js'
import Layout from '@/components/layout/index.vue'

// import Data from '../data/data.xml'
// import data1 from '../data/data1.json'
console.log($)
function abc(){
    // console.log(data1)
    // var element = document.createElement('div');
    // var myIcon = new Image();
    // myIcon.src = '../'+Icon;
    // element.appendChild(myIcon)
    // document.body.appendChild(element)
}
abc()
console.log(module)
if(module.hot){
    module.hot.accept('./common1.js', function(){
        console.log('OOOOKKKKK')
    })
}

console.log(Vue,'whh-----')
const app = new Vue({
    // render: h => <Layout />
    router,
    render: h => h(Layout)
})


app.$mount('#app')
app.$mount('#app')