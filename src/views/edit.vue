<template>
    <div id="content">
        <aside class="sidebar" id="tool-sidebar" v-bind:style="{'width': sidebarWidth['left'] + 'px'}">
            <div class="sidebar-header" v-on:click="switchSidebar('left')">
                <span class="sidebar-arrow"
                    v-bind:class="{'sidebar-arrow-right': isSidebarHide['left'], 'sidebar-arrow-left': !isSidebarHide['left']}"></span>
            </div>
            <div class="sidebar-body">
                <div class="sidebar-content">
                    <ul id="basic-components-list">
                        <li id="text-component"></li>
                        <li id="image-component"></li>
                        <li id="link-component"></li>
                    </ul>
                </div>
                <div class="sidebar-nav">
                    <ul>
                        <li class="selected">基本控件</li>
                        <li>自定义控件</li>
                        <li>更多</li>
                    </ul>
                </div>
            </div>
        </aside>
        <section id="edit-area" v-bind:style="{'right': sidebarWidth['right'] + 'px', 'left': sidebarWidth['left'] + 'px'}">
            <div class="size-ticks horizontal-size-ticks">
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
            </div>
            <page :pager="pager" :on-element-click="onElementClick"></page>
        </section>
        <aside class="sidebar" id="setting-sidebar" v-bind:style="{'width': sidebarWidth['right'] + 'px'}">
            <div class="sidebar-header" v-on:click="switchSidebar('right')">
                <span class="sidebar-arrow"
                    v-bind:class="{'sidebar-arrow-left': isSidebarHide['right'], 'sidebar-arrow-right': !isSidebarHide['right']}"></span>
            </div>
            <setting-sidebar :component="activeComponent" :on-change="onPropertyChange"></setting-sidebar>
        </aside>
    </div>
</template>
<script>
    import Page from '../components/page.vue';
    import SettingSidebar from '../components/setting-sidebar.vue';
    const sidebarInitWidth = 200;

    // let setObjValueByKey = (object, key, value) => {
    //     var keys = key.split('.');
    //     var changedObject = null;
    //     for (let i = 0, l = keys.length; i < l; i++) {
    //         if (changedObject == null) {
    //             changedObject = object[keys[i]];
    //         } else {
    //             changedObject = changedObject[keys[i]];
    //         }
    //         console.log(changedObject);
    //     }
    //     if (changedObject != null) {
    //         changedObject = value;
    //     }
    //     console.log(changedObject);
    //     // object.style.width = value;
    //     // console.log(object);
    // };

    export default {
        data() {
            return {
                sidebarWidth: {
                    left: sidebarInitWidth,
                    right: sidebarInitWidth
                },
                isSidebarHide: {
                    left: false,
                    right: false
                },
                pager: {
                    style: {
                        width: 1280,
                        height: 1000,
                        backgroundColor: '#ddd'
                    }
                },
                activeComponent: {
                    style: {}
                }
            };
        },
        components: {
            page: Page,
            'setting-sidebar': SettingSidebar
        },
        methods: {
            switchSidebar(which) {
                this.isSidebarHide[which] = !this.isSidebarHide[which];
                if (this.isSidebarHide[which]) {
                    this.sidebarWidth[which] = 40;
                } else {
                    this.sidebarWidth[which] = sidebarInitWidth;
                }
            },
            onElementClick(element) {
                this.activeComponent = element;
            },
            onPropertyChange(keypath, newValue) {
                this.$set('activeComponent.' + keypath, newValue);
            }
        }
    };
</script>
<style lang="sass">
    @import "../styles/partial/sidebar";
    @import "../styles/partial/tool-sidebar";
    @import "../styles/partial/pager-canvas";
    $setting-sidebar-width: 200px;

    #edit-area {
        position: absolute;
        top: 0px;
        bottom: 0px;
        left: $tool-sidebar-width;
        right: $setting-sidebar-width;
        background-color: #17181b;
        /* for size-ticks fixed position */
        transform: translateZ(0);
        overflow: auto;
    }

    #setting-sidebar {
        right: 0;
        width: $setting-sidebar-width;

        .sidebar-arrow {
            left: 15px;
        }
    }
</style>
