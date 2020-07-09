import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

import DropdownExample from '../views/DropdownExample.vue';
import ModalExample from '../views/ModalExample.vue';
import ModalExample2 from '../views/ModalExample2.vue';
import DragAndDropUpload from '../views/DragAndDropUpload.vue';

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
  {
    path: '/modal2',
    name: 'modal2',
    component: ModalExample2,
  },
  {
    path: '/drag-and-drop',
    name: 'dragAndDrop',
    component: DragAndDropUpload,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
