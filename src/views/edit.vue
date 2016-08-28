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

            <page :pager="pager" :on-element-click="onElementClick"></page>
            <setting-bar v-bind:style="{'left': '50px','top': '50px'}"></setting-bar>
            <toolbar></toolbar>
        </section>
    </div>
</template>
<script>
    import Page from '../components/page.vue';
    import Settingbar from '../components/setting-bar.vue';
    import Toolbar from '../components/toolbar.vue';

    export default {
        data() {
            return {
                isSidebarHide: {
                    left: false,
                    right: false
                },
                pager: {
                    style: {
                        width: 1280,
                        height: 1000,
                        backgroundColor: '#dddddd'
                    }
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
            onPropertyChange(keypath, newValue) {
                console.info(keypath, newValue);
                this.$set('activeComponent.' + keypath, newValue);
            }
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
