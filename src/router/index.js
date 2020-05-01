import Vue from 'vue';
import VueRouter from 'vue-router';
import ProductVModel from '../views/v-model-views/ProductVModel.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/product-v-model',
    name: 'ProductVModel',
    component: ProductVModel,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
