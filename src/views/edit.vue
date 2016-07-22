<template>
    <div id="content">
        <aside class="sidebar" id="left-sidebar">

        </aside>
        <section id="edit-desk" v-bind:style="{'right': sidebarWidth + 'px'}">

        </section>
        <aside class="sidebar" id="right-sidebar" v-bind:style="{'width': sidebarWidth + 'px'}">
            <div class="resize-sidebar" v-on:mousedown="enableResize">
                <span>|</span>
            </div>
        </aside>
    </div>
</template>
<script>
    let resizeEnable = false;
    const sidebarInitWidth = 250;
    export default {
        data () {
            return {
                sidebarWidth: sidebarInitWidth
            };
        },
        methods: {
            enableResize (event) {
                resizeEnable = true;
                document.body.style.cursor = 'col-resize';
            }
        },
        ready() {
            var _this = this;
            var startPosition;
            document.body.addEventListener('mousemove', function (e) {
                if (resizeEnable) {
                    if (startPosition != undefined) {
                        var currentPosition = e.clientX;
                        var currentWidth = startPosition - currentPosition + sidebarInitWidth;
                        if (currentWidth <= 400 && currentWidth >= 200) {
                            _this.sidebarWidth = currentWidth;
                        }
                    } else {
                        startPosition = e.clientX;
                    }
                }
            });
            document.body.addEventListener('mouseup', function (e) {
                resizeEnable = false;
                document.body.style.cursor = 'default';
            });
        }
    }
</script>
<style lang="sass">
    $sidebar-width: 250px;
    .sidebar {
        position: absolute;
        top: 0px;
        bottom: 0px;
        width: $sidebar-width;
        background-color: #2a2b2e;
        z-index: 1;
        &:hover .resize-sidebar {
            display: block;
        }
    }
    .resize-sidebar {
        position: absolute;
        top: 0px;
        bottom: 0px;
        left: 0px;
        text-align: center;
        width: 5px;
        background: #313235;
        cursor: col-resize;
        display: none;
        span {
            position: absolute;
            top: 50%;
            left: 0px;
            width: 100%;
            height: 20px;
            margin-top: -10px;
            line-height: 20px;
            color: #5a5858;
            text-align: center;
        }
    }
    #left-sidebar {
        left: 0px;
    }
    #right-sidebar {
        right: 0px;
    }
    #edit-desk {
        position: absolute;
        top: 0px;
        bottom: 0px;
        left: $sidebar-width;
        right: $sidebar-width;
        background-color: #17181b;
    }
</style>
