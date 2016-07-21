<template>
    <div id="content">
        <ul class="pager-list">
            <li class="pager-list-item" v-on:click="edit(pager.pagerId)" v-link="{ path: '/edit/' + pager.pagerId}" v-for="pager in pagerList"></li>
        </ul>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                pagerList: [{
                    pagerId: 1,
                    pagerName: 'Demo1'
                }, {
                    pagerId: 2,
                    pagerName: 'Demo2'
                }, {
                    pagerId: 3,
                    pagerName: 'Demo3'
                }]
            };
        },
        methods: {
            edit(pagerId) {
            }
        }
    }
</script>
<style lang="sass">
    .pager-list {
        width: 1000px;
        margin: 0px auto;
        padding: 30px 10px;
        overflow: hidden;
    }
    .pager-list-item {
        float: left;
        width: 160px;
        height: 240px;
        margin: 20px;
        background-color: #fff;
        border: 1px solid #ddd;
        border-radius: 3px;
        cursor: pointer;
        &:hover {
            border: none;
            box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.4);
        }
    }
</style>
