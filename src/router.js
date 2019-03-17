import VueRouter from 'vue-router'
// 导入account组件
import account from './main/Account.vue'
import goodslist from './main/GoodsList.vue'

//导入account里面的子组件
import login from './subcome/login.vue'
import register from './subcome/register.vue'
//3.创建路由对象
var router = new VueRouter({
    routes:[
     ]
})

//把路由对象暴露出去
export default  router