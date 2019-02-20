import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import FridgeItemsIndex from './views/FridgeItemsIndex.vue'
import FridgeItemsShow from './views/FridgeItemsShow.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: Home},
    { path: '/about', name: 'about', component: About},
    { path: '/fridge_items/', name: 'fridge-items-index', component: FridgeItemsIndex},
    { path: '/fridge_items/:id', name: 'fridge-items-show', component: FridgeItemsShow}
  ]
})
