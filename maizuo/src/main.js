import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import "amfe-flexible/index.js"
import 'vant/lib/index.css'
import { IndexBar, IndexAnchor } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { Lazyload } from 'vant';
Vue.config.productionTip = false
Vue.use(Lazyload);
Vue.prototype.axios=axios
axios.defaults.baseURL = 'https://douban.uieee.com/' 
Vue.use(IndexBar).use(IndexAnchor);
Vue.use(Swipe).use(SwipeItem);
import Vant from 'vant'
Vue.use(Vant)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


