<template lang="html">
    <div class="pager-component-container" v-bind:style="style" v-on:click="onComponentClick($event)">

    </div>
</template>

<script>
    import Util from '../util/util.js';
    export default {
        props: ['component', 'select'],
        computed: {
            style: {
                get() {
                    return Util.getStyleFromComponent(this.component);
                }
            }
        },
        methods: {
            onComponentClick(e) {
                if (this.select && typeof this.select === 'function') {
                    this.select(this.component);
                }
                e.stopPropagation();
            }
        }
    };
</script>

<style lang="sass">
    .pager-component-container {
        position: absolute;
    }
</style>
