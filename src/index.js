require('./styles/index.scss');
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import PagerList from './views/pager-list.vue';

Vue.use(VueRouter);
Vue.use(VueResource);

var router = new VueRouter({
    routes: [{
        path: '/list',
        name: 'list',
        component: PagerList
    }, {
        path: '/edit/:pagerId',
        name: 'edit',
        component: resolve => {
            require(['./views/edit.vue'], resolve);
        }
    }, {
        path: '*',
        redirect: {
            path: '/list'
        }
    }]
});

var Pager = new Vue({
    router: router,
    data() {
        return {};
    }
});

/* global document */
Pager.$mount('#container');
