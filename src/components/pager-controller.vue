<template>
    <div class="pager-controller" v-bind:style="style"
        v-on:mousedown="startDrag($event)"
        v-on:mouseup="endDrag()">
        <div class="controller controller--nw"></div>
        <div class="controller controller--w"></div>
        <div class="controller controller--sw"></div>
        <div class="controller controller--s"></div>
        <div class="controller controller--se"></div>
        <div class="controller controller--e"></div>
        <div class="controller controller--ne"></div>
        <div class="controller controller--n"></div>
    </div>
</template>

<script>
    import Util from '../util/util.js';
    export default {
        props: ['component'],
        computed: {
            style() {
                return Util.getStyleFromComponent(this.component, 'controller');
            },
            activeComponent() {
                return this.component;
            },
            left() {
                return this.component.style.left || 0;
            },
            top() {
                return this.component.style.top || 0;
            }
        },
        data() {
            return {
                isDragable: false,
                mouseX: 0,
                mouseY: 0
            };
        },
        methods: {
            startDrag(event) {
                this.isDragable = true;
                this.mouseX = event.clientX;
                this.mouseY = event.clientY;
            },
            drag(event) {
                if (this.isDragable) {
                    var offsetX = event.clientX - this.mouseX;
                    var offsetY = event.clientY - this.mouseY;
                    this.mouseX = event.clientX;
                    this.mouseY = event.clientY;
                    this.$emit('property-change', 'style.top', this.top + offsetY);
                    this.$emit('property-change', 'style.left', this.left + offsetX);
                }
            },
            endDrag() {
                this.isDragable = false;
            }
        },
        mounted() {
            document.addEventListener('mousemove', e => {
                this.drag(e);
            });
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
