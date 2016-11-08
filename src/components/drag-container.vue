<template>
    <div class="dragable-container" v-dragable="drag" v-bind:style="{'transform': 'translateX(' + translate.x + 'px) translateY(' +translate.y + 'px)'}">
        <div class="dragable-header">
            <i class="dragable-icon"></i>
            <i class="close-icon" v-on:click="onCloseClick()"></i>
        </div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: ['onDrag', 'onClose'],
        data() {
            return {
                translate: {
                    x: 0,
                    y: 0
                }
            };
        },
        methods: {
            drag(offsetX, offsetY) {
                this.translate.x += offsetX;
                this.translate.y += offsetY;
            },
            onCloseClick() {
                if (this.onClose) {
                    this.onClose();
                }
            }
        }
    };
</script>

<style lang="sass">
    $basic-color: #212225;
    $icon-height: 24px;
    .dragable-container {
        position: absolute;
        border-radius: 5px;
        padding: 5px;
        background-color: $basic-color;
        box-shadow: 0 3px 3px 0 rgba(32, 32, 32, 0.6);
    }
    .dragable-header {
        width: 100%;
        height: 30px;
        background-color: $basic-color;
        cursor: move;
        i {
            width: $icon-height;
            height: $icon-height;
            background-size: $icon-height $icon-height;
            background-position: center center;
            background-repeat: no-repeat;
        }
    }
    .dragable-icon {
        float: left;
        background-image: url(../asserts/dragable-icon.png);
    }
    .close-icon {
        float: right;
        background-image: url(../asserts/close-icon.png);
        cursor: pointer;
    }
</style>
