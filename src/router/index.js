import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';
import ProductVModel from '../views/v-model-views/ProductVModel.vue';
import ProductProduce from '../views/produce-views/ProductProduce.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/product-v-model',
    name: 'ProductVModel',
    component: ProductVModel,
  },
  {
    path: '/product-produce',
    name: 'ProductProduce',
    component: ProductProduce,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
