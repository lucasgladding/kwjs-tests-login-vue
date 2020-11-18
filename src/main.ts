import Vue from 'vue';
import VueRouter from 'vue-router';

import App from '@/App.vue';
import Login from '@/pages/Login/index.vue';
import Welcome from '@/pages/Welcome.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Login },
  { path: '/login', component: Login },
  { path: '/welcome', component: Welcome },
];

const router = new VueRouter({
  routes,
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
