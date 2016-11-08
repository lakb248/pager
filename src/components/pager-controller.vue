<template>
    <div class="pager-controller" v-bind:style="style"
        v-dragable="drag">
        <div class="controller controller--nw" v-dragable="resize('nw')"></div>
        <div class="controller controller--w" v-dragable="resize('w')"></div>
        <div class="controller controller--sw" v-dragable="resize('sw')"></div>
        <div class="controller controller--s" v-dragable="resize('s')"></div>
        <div class="controller controller--se" v-dragable="resize('se')"></div>
        <div class="controller controller--e" v-dragable="resize('e')"></div>
        <div class="controller controller--ne" v-dragable="resize('ne')"></div>
        <div class="controller controller--n" v-dragable="resize('n')"></div>
    </div>
</template>

<script>
    import Util from '../util/util.js';
    const EVENT = 'property-change';
    export default {
        props: ['component'],
        computed: {
            style() {
                return Util.getStyleFromComponent(this.component, 'controller');
            },
            left() {
                return this.component.style.left || 0;
            },
            top() {
                return this.component.style.top || 0;
            },
            width() {
                return this.component.style.width || 0;
            },
            height() {
                return this.component.style.height || 0;
            }
        },
        methods: {
            drag(offsetX, offsetY) {
                this.$emit(EVENT, 'style.top', this.top + offsetY);
                this.$emit(EVENT, 'style.left', this.left + offsetX);
            },
            resize(direction) {
                return (offsetX, offsetY) => {
                    switch(direction) {
                        case 'nw':
                            this.$emit(EVENT, 'style.height', this.height - offsetY);
                            this.$emit(EVENT, 'style.top', this.top + offsetY);
                            this.$emit(EVENT, 'style.width', this.width - offsetX);
                            this.$emit(EVENT, 'style.left', this.left + offsetX);
                            break;
                        case 'w':
                            this.$emit(EVENT, 'style.width', this.width - offsetX);
                            this.$emit(EVENT, 'style.left', this.left + offsetX);
                            break;
                        case 'sw':
                            this.$emit(EVENT, 'style.height', this.height + offsetY);
                            this.$emit(EVENT, 'style.width', this.width - offsetX);
                            this.$emit(EVENT, 'style.left', this.left + offsetX);
                            break;
                        case 's':
                            this.$emit(EVENT, 'style.height', this.height + offsetY);
                            break;
                        case 'se':
                            this.$emit(EVENT, 'style.height', this.height + offsetY);
                            this.$emit(EVENT, 'style.width', this.width + offsetX);
                            break;
                        case 'e':
                            this.$emit(EVENT, 'style.width', this.width + offsetX);
                            break;
                        case 'ne':
                            this.$emit(EVENT, 'style.height', this.height - offsetY);
                            this.$emit(EVENT, 'style.top', this.top + offsetY);
                            this.$emit(EVENT, 'style.width', this.width + offsetX);
                            break;
                        case 'n':
                            this.$emit(EVENT, 'style.height', this.height - offsetY);
                            this.$emit(EVENT, 'style.top', this.top + offsetY);
                            break;
                    }
                };
            }
        }
    };
</script>

<style lang="sass">
    .pager-controller {
        position: absolute;
        cursor: move;
    }
    .controller {
        position: absolute;
        width: 6px;
        height: 6px;
        background-color: #fff;
        outline: 1px solid #000;
        &--nw {
            left: -3px;
            top: -3px;
            cursor: nw-resize;
        }
        &--w {
            left: -3px;
            top: 50%;
            margin-top: -3px;
            cursor: w-resize;
        }
        &--sw {
            left: -3px;
            top: 100%;
            margin-top: -3px;
            cursor: sw-resize;
        }
        &--s {
            left: 50%;
            top: 100%;
            margin-top: -3px;
            margin-left: -3px;
            cursor: s-resize;
        }
        &--se {
            right: 0px;
            top: 100%;
            margin-right: -3px;
            margin-top: -3px;
            cursor: se-resize;
        }
        &--e {
            right: 0px;
            top: 50%;
            margin-right: -3px;
            margin-top: -3px;
            cursor: e-resize;
        }
        &--ne {
            right: 0px;
            top: 0px;
            margin-right: -3px;
            margin-top: -3px;
            cursor: ne-resize;
        }
        &--n {
            left: 50%;
            top: 0px;
            margin-left: -3px;
            margin-top: -3px;
            cursor: n-resize;
        }
    }
</style>
