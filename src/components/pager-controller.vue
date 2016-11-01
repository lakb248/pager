<template>
    <div class="pager-controller" v-bind:style="style"
        v-on:mousedown="startDrag($event)"
        v-on:mouseup="endDrag()">
        <div class="controller controller--lt"></div>
        <div class="controller controller--l"></div>
        <div class="controller controller--lb"></div>
        <div class="controller controller--b"></div>
        <div class="controller controller--rb"></div>
        <div class="controller controller--r"></div>
        <div class="controller controller--rt"></div>
        <div class="controller controller--t"></div>
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
                    console.log('property-change', 'style.top', this.top, offsetX);
                    console.log('property-change', 'style.left', this.left, offsetY);
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
        &--lt {
            left: -3px;
            top: -3px;
            cursor: nw-resize;
        }
        &--l {
            left: -3px;
            top: 50%;
            margin-top: -3px;
            cursor: w-resize;
        }
        &--lb {
            left: -3px;
            top: 100%;
            margin-top: -3px;
            cursor: sw-resize;
        }
        &--b {
            left: 50%;
            top: 100%;
            margin-top: -3px;
            margin-left: -3px;
            cursor: s-resize;
        }
        &--rb {
            right: 0px;
            top: 100%;
            margin-right: -3px;
            margin-top: -3px;
            cursor: se-resize;
        }
        &--r {
            right: 0px;
            top: 50%;
            margin-right: -3px;
            margin-top: -3px;
            cursor: e-resize;
        }
        &--rt {
            right: 0px;
            top: 0px;
            margin-right: -3px;
            margin-top: -3px;
            cursor: ne-resize;
        }
        &--t {
            left: 50%;
            top: 0px;
            margin-left: -3px;
            margin-top: -3px;
            cursor: n-resize;
        }
    }
</style>
