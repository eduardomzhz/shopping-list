import Vue from 'vue';
import Router from 'vue-router';
import App from './App.vue';
import Home from './components/Home';

Vue.use(Router);

const routes = [
  { path: '/', component: Home }
];

new Vue({
  el: '#app',
  router: new Router({ routes }),
  render: h => h(App)
});
