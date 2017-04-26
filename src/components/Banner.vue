<template>
    <div class="banner">
        <div class="caption">
            <h4>
                Generic sunset
            </h4>
            <p>
                Nothing better as a banner than a generic sunset!
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'banner',
    props: {

    },
    methods: {

    },
    computed: {

    },
    components: {

    }
}
</script>

<style lang="scss">
    @import '../assets/css/variables';
    $banner_height: 280px;
    .banner {
        position: relative;
        width: 100%;
        height: $banner_height;
        background-color: $color_black;
        background-image: url('~@/assets/img/sunset.jpg');
        background-position: center;
        background-repeat: no-repeat;
        .caption {
            position: absolute;
            bottom: 0;
            width: 100%;
            min-height: $banner_height/5;
            background: rgba(0, 0, 0, 0.7);
            color: rgba(255,255,255, 0.5);
            padding: 8px;
            text-align: right;
            h3, h4, h5, h6 {
            margin-bottom: 5px;
            }
        }
    }
</style>
