<template>
    <div id="app">
        <navigation />
        <banner />
        <router-view></router-view>
        <footer-component />
    </div>
</template>

<script>
import Navigation from '@/components/Navigation'
import Banner from '@/components/Banner'
import FooterComponent from '@/components/Footer'
export default {
    name: 'app',
    components: {
        Navigation,
        Banner,
        FooterComponent
    }

}
</script>

<style>
</style>
