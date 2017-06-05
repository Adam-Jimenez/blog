<template>
    <div class="banner">
        <div class="caption">
            <blockquote>
            </blockquote>
            <p>
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
    $banner_height: 350px;
    .banner {
        position: relative;
        width: 100%;
        height: $banner_height;
        background: url('~@/assets/img/leaves.jpg') no-repeat top center fixed;
        background-size: cover;
        .caption {
            font-family: 'Lato', sans-serif;
            position: absolute;
            bottom: 0;
            width: 100%;
            min-height: $banner_height/5;
            background: rgba(0, 0, 0, 0.7);
            color: rgba(255,255,255, 0.7);
            padding: 8px;
            text-align: right;
            blockquote {
                border: none;
                display: inline-block;
                padding: 0;
                text-align: justify;
                font-size: 100%;
                margin-bottom: 5px;
                max-width: 400px;
            }
            p {
                margin-bottom: 4px;
            }
        }
    }
</style>
