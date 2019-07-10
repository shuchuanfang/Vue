// 入口文件
import Vue from 'vue'

// import 
import { Header } from 'mint-ui';

import app from './App.vue'

var vm =new Vue({
    el: '#app',
    render: c=>c(app)
})

