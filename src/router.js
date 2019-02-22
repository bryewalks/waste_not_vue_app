import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import FridgeItemsIndex from './views/FridgeItemsIndex.vue'
import FridgeItemsNew from './views/FridgeItemsNew.vue'
import FridgeItemsShow from './views/FridgeItemsShow.vue'
import FridgeItemsEdit from './views/FridgeItemsEdit.vue'
import Signup from "./views/Signup.vue"
import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: FridgeItemsIndex},
    { path: '/about', name: 'about', component: About},
    { path: '/fridge_items', name: 'fridge-items-index', component: FridgeItemsIndex},
    { path: '/fridge_items/new', name: 'fridge-items-new', component: FridgeItemsNew },
    { path: '/fridge_items/:id', name: 'fridge-items-show', component: FridgeItemsShow },
    { path: '/fridge_items/:id/edit', name: 'fridge-items-edit', component: FridgeItemsEdit },
    { path: "/signup", name: "signup", component: Signup },
    { path: "/login", name: "login", component: Login },
    { path: "/logout", name: "logout", component: Logout }

  ]
})
