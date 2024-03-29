import Vue from 'vue'
import VueRouter from 'vue-router'
import VueTodo from '../components/VueTodo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'VueTodo',
    component: VueTodo
  },
  {
    path: '/FavTodos',
    name: 'FavTodos',
    // route level code-splitting
    // this generates a separate chunk (FavTodos.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "FavTodos" */ '../components/FavTodos.vue')
  },
  {
    path: '/selectedTodo/:id',
    name: 'selectedTodo',
    // route level code-splitting
    // this generates a separate chunk (FavTodos.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "FavTodos" */ '../components/SelectedTodo.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
