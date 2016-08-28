<template>
    <div class="dragable-container">
        <div class="dragable-header" v-on:mousedown="startDrag($event)" v-on:mousemove="drag($event)" v-on:mouseup="endDrag()"></div>
        <slot></slot>
    </div>
</template>

<script>
    var startPosition = {
        x: 0,
        y: 0
    };
    export default {
        data() {
            return {
                isDragable: false
            };
        },
        methods: {
            startDrag(event) {
                this.isDragable = true;
                startPosition.x = event.clientX;
                startPosition.y = event.clientY;
            },
            drag(event) {
                if (this.isDragable) {
                    var element = this.$el;
                    var offsetX = event.clientX - startPosition.x;
                    var offsetY = event.clientY - startPosition.y;
                    startPosition.x = event.clientX;
                    startPosition.y = event.clientY;
                    element.style.left = element.offsetLeft + offsetX + 'px';
                    element.style.top = element.offsetTop + offsetY + 'px';
                }
            },
            endDrag() {
                this.isDragable = false;
            }
        }
    };
</script>

<style lang="sass">
    $basic-color: #212225;
    .dragable-container {
        position: absolute;
        border-radius: 2px;
        padding: 5px;
        background-color: $basic-color;
        box-shadow: 0 3px 3px 0 rgba(32, 32, 32, 0.6);
    }
    .dragable-header {
        width: 100%;
        height: 30px;
        background: url(../asserts/dragable-icon.png) no-repeat 10px center;
        background-size: 24px 24px;
        background-color: $basic-color;
        cursor: move;
    }
</style>
