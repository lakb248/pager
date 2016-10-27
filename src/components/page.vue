<template lang="html">
    <div class="page-container" v-bind:style="style" v-on:click="onComponentSelect(pager)">
        <pager-component v-for="component in pager.components" v-bind:component="component" v-bind:select="onComponentSelect"></pager-component>
        <pager-controller></pager-controller>
    </div>
</template>
<script>
import PagerComponent from './pager-component.vue';
import PagerController from './pager-controller.vue';
import Util from '../util/util.js';

export default {
    props: ['pager', 'onElementClick'],
    components: {
        'pager-component': PagerComponent,
        'pager-controller': PagerController
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
        onComponentSelect(component) {
            console.log('on page click');
            this.onElementClick(component);
        }
    }
};
</script>
<style lang="sass">
    .page-container {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 1280px;
        background-color: #fff;
        cursor: move;
    }
</style>
