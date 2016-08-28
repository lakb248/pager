<template>
    <dragable>
        <section class="setting-section">
            <div class="setting-header open">样式</div>
            <div class="setting-content">
                <div class="setting-row">
                    <div class="setting-item col-1">
                        <label>宽:</label>
                        <input type="number" v-bind:value="activeComponent.style.width" v-on:input="onSettingChange($event, 'style.width')">
                    </div>
                    <div class="setting-item col-1">
                        <label>高:</label>
                        <input type="number" v-bind:value="activeComponent.style.height" v-on:input="onSettingChange($event, 'style.height')">
                    </div>
                </div>
                <div class="setting-row">
                    <div class="setting-item col-1">
                        <label>上:</label>
                        <input type="number" v-bind:value="activeComponent.style.top" v-on:input="onSettingChange($event, 'style.top')">
                    </div>
                    <div class="setting-item col-1">
                        <label>下:</label>
                        <input type="number" v-bind:value="activeComponent.style.bottom" v-on:input="onSettingChange($event, 'style.bottom')">
                    </div>
                </div>
                <div class="setting-row">
                    <div class="setting-item col-1">
                        <label>左:</label>
                        <input type="number" v-bind:value="activeComponent.style.left" v-on:input="onSettingChange($event, 'style.left')">
                    </div>
                    <div class="setting-item col-1">
                        <label>右:</label>
                        <input type="number" v-bind:value="activeComponent.style.right" v-on:input="onSettingChange($event, 'style.right')">
                    </div>
                </div>
                <div class="setting-row">
                    <div class="setting-item col-2">
                        <label>背景:</label>
                        <input type="color" v-bind:value="activeComponent.style.backgroundColor" v-on:input="onSettingChange($event, 'style.backgroundColor')">
                        <i id="background-img-icon"></i>
                    </div>
                </div>
            </div>
        </section>
        <section class="setting-section">
            <div class="setting-header close">属性</div>
            <div class="setting-content"></div>
        </section>
        <section class="setting-section">
            <div class="setting-header close">动画</div>
            <div class="setting-content"></div>
        </section>
    </dragable>
</template>
<script>
    import DragContainer from './drag-container.vue';
    // let getObjValueByKey = (object, key) => {
    //     var keys = key.split('.');
    //     var newValue = null;
    //     for (let i = 0, l = keys.length; i < l; i++) {
    //         if (newValue == null) {
    //             newValue = object[keys[i]];
    //         } else {
    //             newValue = newValue[keys[i]];
    //         }
    //     }
    //     return newValue;
    // };
    let setObjValueByKey = (object, key, value) => {
        var keys = key.split('.');
        var newValue = null;
        for (let i = 0, l = keys.length; i < l; i++) {
            if (newValue == null) {
                newValue = object[keys[i]];
            } else if (i === l - 1) {
                newValue[keys[i]] = value;
            } else {
                newValue = newValue[keys[i]];
            }
        }
    };
    export default {
        props: ['component', 'onChange'],
        components: {
            dragable: DragContainer
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
            onSettingChange(e, type) {
                var newValue = e.target.value;
                setObjValueByKey(this.activeComponent, type, newValue);
                // var newValue = getObjValueByKey(this.activeComponent, type);
                this.onChange(type, newValue);
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
        padding: 0 20px;
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

        &.close {
            background-color: $setting-header-background;

            &::after {
                top: 10px;
                transform: rotate(45deg);
            }
        }

        &.open {
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
        padding: 10px 20px;
        background-color: $setting-background;
    }

    .setting-row {
        padding: 5px 0;
        overflow: hidden;
    }

    .setting-item {
        label {
            display: inline-block;
            min-width: 20px;
            height: 20px;
            font-size: 13px;
            line-height: 20px;
        }

        input {
            width: 50px;
            color: $setting-header-color;
            text-align: center;
        }

        input[type="color"] {
            width: 90px;
        }
    }

    .col-1 {
        float: left;
        width: 50%;
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
