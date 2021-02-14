import { createRouter, createWebHashHistory } from "vue-router";

import Home from '../pages/Home'
import Cart from '../pages/Cart'


const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/cart',
    component: Cart
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
