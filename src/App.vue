<template>
    <div id="app">
        <navigation />
        <banner />
        <router-view></router-view>
    </div>
</template>

<script>
import Navigation from '@/components/Navigation'
import Banner from '@/components/Banner'
export default {
    name: 'app',
    components: {
        Navigation,
        Banner
    }

}
</script>

<style>
</style>
