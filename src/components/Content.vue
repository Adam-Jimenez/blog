<template>
    <div class="content">
        <div class="content-container">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: 'content-component',
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

$content_width: 767px;
$content_link_color: #55a;
$content_link_color_hover: #226;

.content {
    padding-top: 70px;
    padding-left: 20px;
    padding-right: 20px;
    font-family: 'Lato', sans-serif;
    font-size: 120%;
}
.content-container {
    margin: auto;
    max-width: $content_width;
    a, a:hover, a:active, a:visited, a:link {
        color: $content_link_color;
    }
    a:hover {
        color: $content_link_color_hover;
    }
}
</style>
