<template>
    <div class="nav-main">
        <div class="container">
            <nav class="left">
                <router-link class="logo" to="/" exact>Adam Jimenez</router-link>
            </nav>
            <nav class="right">
				<ul>
					<li>
						<router-link to="/" exact>Home</router-link>
					</li>
					<li>
						<router-link to="/about">About</router-link>
					</li>
					<li>
						<router-link to="/contact">Contact</router-link>
					</li>
				</ul>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    name: 'navigation',
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
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');
	@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');
    $nav_padding_top: 25px;
    $nav_padding_bottom: 25px;
    $nav_bg_color: white;

    .nav-main {
        padding-top: $nav_padding_top;
        padding-bottom: $nav_padding_bottom;
        background-color: $nav_bg_color;
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
        z-index: 10;
        position: relative;
        line-height: 1.5em;

        .logo {
            font-family: 'Open Sans', sans-serif;
            font-weight: 700;
            font-size: 27px;
            color: #000;
            letter-spacing: -2px;
        }
        .left {
            float: left;
        }
        .right {
            float: right;
        }
        @media only screen and (max-width: 767px) {
            .left {
                float: none;
                margin-bottom: 15px;
            }
            .right {
                float: none;
                text-align: left;
                width: auto;
            }
        }
		ul {
            margin: 0;
            padding: 0;
			> li {
				display: inline-block;
				margin-right: 1.65em;
				a {
					font-family: Lato, sans-serif;
					font-size: 15px;
					font-weight: 500;
                    transition: all .2s ease-in-out;
				}
			}
            > li:last-child {
                margin-right: 0;
            }
		}
    }
</style>
