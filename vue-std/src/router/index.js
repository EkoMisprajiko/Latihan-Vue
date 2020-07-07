import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

import DropdownExample from '../views/DropdownExample.vue';
import ModalExample from '../views/ModalExample.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/dropdown',
    name: 'dropdown',
    component: DropdownExample,
  },
  {
    path: '/modal',
    name: 'modal',
    component: ModalExample,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
