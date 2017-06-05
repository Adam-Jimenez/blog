<template>
    <div id="app">
        <navigation />
        <banner />
        <content-component>
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
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

<style lang="scss">
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0;
}
</style>
