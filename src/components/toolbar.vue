<template>
    <dragable style="left:20px;top:20px;z-index: 9999;">
        <div class="toolbar-body">
            <div class="toolbar-content" v-on:click="onToolClick($event)">
                <ul id="basic-components-list">
                    <li id="label-component"></li>
                    <li id="image-component"></li>
                    <li id="link-component"></li>
                </ul>
            </div>
        </div>
    </dragable>
</template>

<script>
import Dragable from './drag-container.vue';
export default {
    components: {
        dragable: Dragable
    },
    methods: {
        onToolClick(e) {
            var target = e.target;
            var id = target.id;
            var type = id.split('-')[0];
            this.$emit('create-component', type);
        }
    }
};
</script>

<style lang="sass">
    $toolbar-width: 108px;
    $basic-component-item-background: #212225;
    $basic-component-item-selected-background: #333132;

    .toolbar-body {
        width: $toolbar-width;
    }

    .toolbar-content {
        width: $toolbar-width;
        /* overflow: auto; */
    }

    #basic-components-list {
        width: 100%;

        li {
            /* display: inline-block; */
            float: left;
            width: 32px;
            height: 32px;
            margin: 2px;
            cursor: pointer;
            background-color: $basic-component-item-background;
            background-position: center center;
            background-repeat: no-repeat;
            background-size: 18px 18px;

            &.select,
            &:hover {
                background-color: $basic-component-item-selected-background;
            }
        }
    }

    #label-component {
        background-image: url('../asserts/text-icon.png');

        &:hover {
            background-image: url('../asserts/text-icon-selected.png');
        }
    }

    #image-component {
        background-image: url('../asserts/image-icon.png');

        &:hover {
            background-image: url('../asserts/image-icon-selected.png');
        }
    }

    #link-component {
        background-image: url('../asserts/link-icon.png');

        &:hover {
            background-image: url('../asserts/link-icon-selected.png');
        }
    }

</style>
