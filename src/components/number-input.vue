<template>
    <input type="text" v-on:input="onInput($event)" v-on:keydown="onKeyDown($event)" :value="value">
</template>

<script>
var setNumber = function (val, max, min) {
    var result = val;
    if (val > max) {
        result = max;
    } else if (val < min) {
        result = min;
    }
    return result;
};
const ARROW_DOWN = 40;
const ARROW_UP = 38;
export default {
    props: ['number', 'max', 'min', 'change'],
    data() {
        return {
            value: 0
        };
    },
    watch: {
        value(val, oldValue) {
            if (val !== oldValue) {
                if (this.change && typeof this.change === 'function') {
                    this.change(val);
                }
            }
        }
    },
    computed: {
        maximum() {
            if (!this.max || isNaN(parseInt(this.max, 10))) {
                return Number.MAX_SAFE_INTEGER;
            } else {
                return this.max;
            }
        },
        minimum() {
            if (!this.min || isNaN(parseInt(this.min, 10))) {
                return 0;
            } else {
                return this.min;
            }
        }
    },
    methods: {
        onInput(e) {
            var value = e.target.value;
            e.target.value = this.value;
            value = Number(value);
            if (isNaN(value)) {
                return;
            } else {
                this.value = setNumber(value, this.max, this.min);
            }
        },
        onKeyDown(e) {
            var keyCode = e.keyCode || e.which;
            if (keyCode === ARROW_UP) {
                if (this.value < this.maximum) {
                    this.value ++;
                }
            } else if (keyCode === ARROW_DOWN) {
                if (this.value > this.minimum) {
                    this.value --;
                }
            }
        }
    },
    mounted() {
        var onNumberChange = (val) => {
            if (!val) {
                this.value = this.minimum;
            } else {
                var value = parseInt(val, 10);
                if (isNaN(value)) {
                    this.value = this.minimum;
                } else {
                    this.value = setNumber(value, this.maximum, this.minimum);
                }
            }
        };
        onNumberChange(this.number);
        this.$watch('number', onNumberChange);
    }
};
</script>

<style lang="sass">
</style>
