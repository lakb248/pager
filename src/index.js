require('./styles/index.scss');
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import PagerList from './views/pager-list.vue';

Vue.use(VueRouter);
Vue.use(VueResource);

var router = new VueRouter();

var Pager = Vue.extend({
    data() {
        return {};
    }
});

router.map({
    '/list': {
        name: 'list',
        component: PagerList
    },
    '/edit/:pagerId': {
        name: 'edit',
        component: resolve => {
            require(['./views/edit.vue'], resolve);
        }
    }
});
router.redirect({
    '*': '/list'
});

/* global document */
router.start(Pager, document.body);
