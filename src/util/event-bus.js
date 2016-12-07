import Vue from 'vue';
var bus = new Vue();
export default {
    register(event, callback) {
        bus.$on(event, callback);
    },
    dispatch(event) {
        bus.$emit(event);
    }
};
