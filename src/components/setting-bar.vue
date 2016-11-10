<template>
    <dragable style="right:20px;top:20px;z-index:9999;">
        <section class="setting-section">
            <div class="setting-header setting-header--open">样式</div>
            <div class="setting-content">
                <div class="setting-row">
                    <div class="setting-item col-1">
                        <label class="setting-item__label">宽:</label>
                        <number-input class="setting-item__input" :number="activeComponent.style.width" v-bind:change="settingChangeCb('style.width')">
                    </div>
                    <div class="setting-item col-1">
                        <label class="setting-item__label">高:</label>
                        <number-input class="setting-item__input" :number="activeComponent.style.height" v-bind:change="settingChangeCb('style.height')">
                    </div>
                </div>
                <div class="setting-row">
                    <div class="setting-item col-1">
                        <label class="setting-item__label">上:</label>
                        <number-input class="setting-item__input" :number="activeComponent.style.top" v-bind:change="settingChangeCb('style.top')">
                    </div>
                    <div class="setting-item col-1">
                        <label class="setting-item__label">左:</label>
                        <number-input class="setting-item__input" :number="activeComponent.style.left" v-bind:change="settingChangeCb('style.left')">
                    </div>
                </div>
                <div class="setting-row">
                    <div class="setting-item col-2">
                        <label class="setting-item__label">背景:</label>
                        <input class="setting-item__input" type="color" v-bind:value="activeComponent.style.backgroundColor" v-on:input="onSettingChange($event.target.value, 'style.backgroundColor')">
                        <i id="background-img-icon"></i>
                    </div>
                </div>
            </div>
        </section>
        <section class="setting-section">
            <div class="setting-header setting-header--close">属性</div>
            <div class="setting-content"></div>
        </section>
        <section class="setting-section">
            <div class="setting-header setting-header--close">动画</div>
            <div class="setting-content"></div>
        </section>
    </dragable>
</template>
<script>
    import DragContainer from './drag-container.vue';
    import NumberInput from './number-input.vue';

    export default {
        props: ['component'],
        components: {
            dragable: DragContainer,
            'number-input': NumberInput
        },
        computed: {
            // prevent two-way data binding
            activeComponent: {
                get() {
                    return JSON.parse(JSON.stringify(this.component));
                }
            }
        },
        methods: {
            settingChangeCb(type) {
                return (value) => {
                    this.$emit('property-change', type, value);
                };
            },
            onSettingChange(value, type) {
                this.$emit('property-change', type, value);
            }
        }
    };
</script>
<style lang="sass">
    $setting-background: #212225;
    $setting-header-background: #2a2b2e;
    $setting-header-color: #989ba2;
    $setting-header-arrow-color: #5d5e62;
    $setting-header-color-open: #fafafa;
    $setting-header-height: 40px;
    $setting-header-border-color: #363639;

    .setting-section {
        width: 100%;
        background-color: $setting-background;
    }

    .setting-header {
        position: relative;
        width: 100%;
        height: $setting-header-height;
        padding: 0 10px;
        font-size: 14px;
        line-height: $setting-header-height;
        color: $setting-header-color;
        cursor: pointer;
        border-bottom: 1px solid $setting-header-border-color;

        &::after {
            position: absolute;
            right: 20px;
            width: 6px;
            height: 6px;
            border: 2px solid transparent;
            border-right-color: $setting-header-arrow-color;
            border-bottom-color: $setting-header-arrow-color;
            content: '';
        }

        &--close {
            background-color: $setting-header-background;

            &::after {
                top: 10px;
                transform: rotate(45deg);
            }
        }

        &--open {
            color: $setting-header-color-open;
            background-color: $setting-background;

            &::after {
                top: 17px;
                transform: rotate(-135deg);
            }

            & + .setting-content {
                display: block;
                color: $setting-header-color;
            }
        }
    }

    .setting-content {
        display: none;
        padding: 10px;
        background-color: $setting-background;
    }

    .setting-row {
        padding: 5px 0;
        overflow: hidden;
    }

    .setting-item {
        input[type="color"] {
            width: 80px;
        }
    }

    .setting-item__label {
        display: inline-block;
        min-width: 20px;
        height: 20px;
        font-size: 13px;
        line-height: 20px;
    }

    .setting-item__input {
        width: 50px;
        color: $setting-header-color;
        text-align: center;
    }

    .col-1 {
        float: left;
        width: 50%;
        padding-right: 5px;
    }

    #background-img-icon {
        float: right;
        width: 20px;
        height: 20px;
        margin-right: 5px;
        background: url('../asserts/image-icon.png') no-repeat center center;
        background-size: 20px 20px;
        cursor: pointer;
    }
</style>
