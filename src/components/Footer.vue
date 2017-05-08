<template>
    <footer>
        <div class="container">
            Made with <i class="fa fa-heart" /> by Adam
        </div>
    </footer>
</template>

<script>
export default {
    name: 'footer-component',
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
    $footer-color: #A5A5A5;

    footer {
        color: $footer-color;
        font-family: Lato, sans-serif;
        font-size: 15px;
        font-weight: 400;
        text-transform: uppercase;
        letter-spacing: 3px;
        text-align: center;
        margin-bottom: 1.65em;
        margin-top: 40px;

        .fa-heart {
            color: darkred;
        }
    }
</style>
