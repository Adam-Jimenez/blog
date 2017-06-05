<template>
    <div class="projects">
        <h2>Projects</h2>
        <hr />
        <post-preview />
        <h3>Calnet</h3>
        <span>Janvier 2017</span>
        <p>Lors d'une session intensive de fin d'étude au Cégep André-Laurendeau, j'ai eu la chance de travailler auprès des dix autres finissants de la technique pour réaliser un projet de notre choix, où nous serions responsables de la conception, du développement et de la gestion de projet. Après concensus général, nous avons pris la décision ambitieuse de créer un réseau social pour le cégep du nom de Calnet, malgré la contrainte temporelle de trois semaines...</p>
    </div>
</template>

<script>
// reuse of postpreview because project the same format;
// a page for project previews and a page for each project
import PostPreview from '@/components/PostPreview'
export default {
    name: 'Projects',
    props: {

    },
    methods: {

    },
    computed: {

    },
    components: {
        PostPreview
    }
}
</script>

<style lang="scss">

</style>
