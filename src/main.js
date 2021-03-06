// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// fastclick解决点击事件500毫秒延迟的问题
// 将fastclick引入到项目中
import fastClick from 'fastclick'
// 轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
// 基础CSS样式
import 'css/reset.css'
// 1px处理解决方案CSS
import 'css/border.css'
// 图标iconfont文件
import 'css/iconfont.css'
// 引入vuex文件
import store from './vuex/index.js'
// rem适配，暂时不用
// import './assets/js/rem.js'

Vue.config.productionTip = false

// 注册fastClick插件
fastClick.attach(document.body)

// 注册轮播图插件
Vue.use(VueAwesomeSwiper, { })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
  // created () {
  //   // 测试：当为手机端路由到手机端页面，如果为PC端则正常跳转
  //   if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
  //     this.$router.push({
  //       path: '/iphone'
  //     })
  //   } else {
  //     this.$router.push({
  //       path: '/'
  //     })
  //   }
  // }
})
