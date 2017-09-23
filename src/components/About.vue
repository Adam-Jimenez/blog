<template>
    <div class="about" v-once>
        <h2>About me </h2>
        <img src="~@/assets/img/profile.jpg" />
        <hr />
        <p>
            My name is Adam Jimenez and I am a software developer passionate about making the world a better place, one line of code at the time.
        </p>
        <p>
            I've been interested in programming ever since my early teenage years when I discovered that you could make games only by typing words in the correct order.
            In fact, my first game is still available <a target="_blank" href="http://gamejolt.com/games/ultimate-adventurer/6861">here</a>.
        </p>
		<p>
            Since then, I've been exploring the possibilities of the programming world by working on a variety of <router-link to="/projects">projects</router-link>.
		</p>
        <p>
            I am currently studying at École de Technologie Supérieure (ÉTS) in Software Engineering.
        </p>
		<div class="links">
			<a target="_blank" href="https://github.com/Adam-Jimenez">
				<i class="fa fa-github" /> Github
			</a>
			<a target="_blank" href="https://www.linkedin.com/in/adam-jimenez-12b716114/">
				<i class="fa fa-linkedin" /> Linkedin
			</a>
		</div>
    </div>
</template>

<script>
export default {
    name: 'about',
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
.about {
    h2 {
        display: inline-block;
    }
    img {
        float: right;
        width: 125px;
        border-radius: 50%;
        box-shadow: 0px 1px 2px black;
		margin: 4px;
    }
	img.left {
		float: left;
		border-radius: 0px;
	}
	.links {
		clear:both;
		padding-top: 10px;
		font-size: 110%;
		a {
			color: #555;
			margin-right: 10px;
		}
        a:hover {
            color: black;
        }
	}
}
</style>
