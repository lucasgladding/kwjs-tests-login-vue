import Vue from 'vue';
import VueRouter from 'vue-router';

import LoginContainer from '@/pages/Login/index.vue';
import Welcome from '@/pages/Welcome.vue';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: '/', component: LoginContainer },
  { path: '/login', component: LoginContainer },
  { path: '/welcome', component: Welcome },
];

const router = new VueRouter({
  routes,
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
