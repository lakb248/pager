<template>
    <div id="content">
        <section id="edit-area">
            <!-- <div class="size-ticks horizontal-size-ticks">
                <div class="size-ticks-number-container">
                    <div class="size-ticks-number"> </div>
                    <div class="size-ticks-number">0</div>
                    <div class="size-ticks-number">100</div>
                    <div class="size-ticks-number">200</div>
                    <div class="size-ticks-number">300</div>
                    <div class="size-ticks-number">400</div>
                    <div class="size-ticks-number">500</div>
                    <div class="size-ticks-number">600</div>
                    <div class="size-ticks-number">700</div>
                    <div class="size-ticks-number">800</div>
                </div>
            </div>
            <div class="size-ticks vertical-size-ticks">
                <div class="size-ticks-number-container">
                    <div class="size-ticks-number"></div>
                    <div class="size-ticks-number">0</div>
                    <div class="size-ticks-number">100</div>
                    <div class="size-ticks-number">200</div>
                    <div class="size-ticks-number">300</div>
                    <div class="size-ticks-number">400</div>
                    <div class="size-ticks-number">500</div>
                    <div class="size-ticks-number">600</div>
                    <div class="size-ticks-number">700</div>
                    <div class="size-ticks-number">800</div>
                </div>
            </div> -->

            <page :pager="pager" :active-component="activeComponent" :on-element-click="onElementClick"></page>
            <setting-bar :component="activeComponent" v-on:property-change="onPropertyChange"></setting-bar>
            <toolbar v-on:create-component="onComponentCreate"></toolbar>
        </section>
    </div>
</template>
<script>
    import Page from '../components/page.vue';
    import Settingbar from '../components/setting-bar.vue';
    import Toolbar from '../components/toolbar.vue';
    import Util from '../util/util.js';

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
        data() {
            return {
                pager: {
                    style: {
                        width: '100%',
                        height: 1000,
                        top: 0,
                        left: 0,
                        backgroundColor: '#ffffff'
                    },
                    components: []
                },
                activeComponent: {
                    style: {}
                }
            };
        },
        components: {
            page: Page,
            'setting-bar': Settingbar,
            toolbar: Toolbar
        },
        methods: {
            onElementClick(element) {
                this.activeComponent = element;
            },
            onPropertyChange(keypath, value) {
                setObjValueByKey(this.activeComponent, keypath, value);
            },
            onComponentCreate(type) {
                var element = Util.createComonent();
                this.pager.components.push(element);
                this.activeComponent = element;
            }
        },
        mounted() {
            this.$on('property-change', () => {
                console.log('property-change');
            });
            this.$on('create-component', () => {
                console.log('create-component');
            });
        }
    };
</script>
<style lang="sass">
    @import "../styles/partial/pager-canvas";

    #edit-area {
        position: absolute;
        top: 0px;
        bottom: 0px;
        left: 0px;
        right: 0px;
        background-color: #17181b;
        /* for size-ticks fixed position */
        transform: translateZ(0);
        overflow: auto;
    }
</style>
