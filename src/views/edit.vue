<template>
    <div id="content">
        <aside class="sidebar" id="left-sidebar">

        </aside>
        <section id="edit-desk">

        </section>
        <aside class="sidebar" id="right-sidebar">

        </aside>
    </div>
</template>
<script>

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
    }
    #left-sidebar {
        left: 0px;
        /* box-shadow: 0px 2px 4px 0px rgba(32, 32, 32, 0.4); */
    }
    #right-sidebar {
        right: 0px;
        /* box-shadow: -3px 0px 1px 1px rgba(32, 32, 32, 0.4); */
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
