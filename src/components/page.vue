<template lang="html">
    <div class="pager-container" v-bind:style="style">
        <pager-component v-for="component in pager.components" v-bind:component="component" v-bind:select="onComponentSelect"></pager-component>
    </div>
</template>
<script>
import PagerComponent from './pager-component.vue';
import PagerController from './pager-controller.vue';
import Util from '../util/util.js';

export default {
    props: ['pager', 'activeComponent', 'onElementClick'],
    components: {
        'pager-component': PagerComponent,
        'pager-controller': PagerController
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
            // TODO: update pager controller
            this.onElementClick(component);
        }
    }
};
</script>
<style lang="sass">
    .pager-container {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 1280px;
        background-color: #fff;
    }
</style>
