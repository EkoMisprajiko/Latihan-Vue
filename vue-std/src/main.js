import Vue from 'vue';
import PortalVue from 'portal-vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

import './assets/styles/main.css';

Vue.config.productionTip = false;

Vue.use(PortalVue);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
