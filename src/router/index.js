import { createRouter, createWebHashHistory } from "vue-router";

import Home from "../pages/Home";
import Cart from "../pages/Cart";
import ProductPage from "../pages/ProductPage";

/* eslint-disable */ 
const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: '/:productId?',
    component: ProductPage,
    props: true
  },
  {
    path: "/cart",
    component: Cart
  },
  // {
  //   path: "/1",
  //   component: ProductPage
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
