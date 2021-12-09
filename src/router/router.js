import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    name: 'first',
    path: '/first',
    component: import('../views/first')
  },
  {
    name: 'second',
    path: '/second',
    component: import('../views/second')
  }
]

const routers = createRouter({
  history: createWebHistory(),
  routes,
})

export default routers
