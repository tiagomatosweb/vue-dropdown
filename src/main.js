import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import '@/assets/css/tailwind.css';

Vue.config.productionTip = false;

const Foo = { template: '<div>foo</div>' };
const Bar = { template: '<div>bar</div>' };

const routes = [
    { path: '/foo', name: 'foo', component: Foo },
    { path: '/bar', name: 'bar', component: Bar },
];

const router = new VueRouter({
    routes,
});

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
