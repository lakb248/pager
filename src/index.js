import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

Vue.use(VueRouter);
Vue.use(VueResource);

var router = new VueRouter();

var Pager = Vue.extend({
    data() {
        return {};
    }
});

router.start(Pager, document.body);
