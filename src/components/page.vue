<template lang="html">
    <div class="page-container" v-bind:style="style" v-on:click="onPageClick(pager)">
        <pager-component v-for="component in pager.components" v-bind:component="component"></pager-component>
    </div>
</template>
<script>
import PagerComponent from './pager-component.vue';
import Util from '../util/util.js';

export default {
    props: ['pager', 'onElementClick'],
    components: {
        'pager-component': PagerComponent
    },
    data() {
        return {};
    },
    computed: {
        style: {
            get() {
                return Util.getStyleFromComponent(this.pager);
            }
        }
    },
    methods: {
        onPageClick(data) {
            this.onElementClick(data);
        }
    }
};
</script>
<style lang="sass">
    .page-container {
        position: absolute;
        top: 100px;
        left: 100px;
        width: 640px;
        height: 1280px;
        background-color: #fff;
        cursor: move;
    }
</style>
