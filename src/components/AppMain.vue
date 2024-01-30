<script>
import axios from 'axios';
import { store } from '../store';
import AppBandiere.vue from './AppBandiere.vue';

export default {
    data() {
        return {
          store,
        };
    },
    methods: {

    },
    components: {
       AppBandiere,
    },
}
</script>

<template>
    <AppBandiere/>
</template>

<style lang="scss" scoped>
</style>