<template>
    <div id="app">
        <navigation />
        <banner />
        <content-component>
            <router-view></router-view>
        </content-component>
        <footer-component />
    </div>
</template>

<script>
import Navigation from '@/components/Navigation'
import Banner from '@/components/Banner'
import FooterComponent from '@/components/Footer'
import ContentComponent from '@/components/Content'
export default {
    name: 'app',
    components: {
        Navigation,
        Banner,
        FooterComponent,
        ContentComponent
    }

}
</script>

<style>
</style>
