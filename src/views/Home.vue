<template lang="pug">
.home
	img(alt='Vue logo' src='../assets/img/hammer-sickle.svg' width="150px")
	h1 Addio Mondo Crudele
	h2 VU Meter Registers Loudness
	router-link(to="/about")
		vk-button(color="blue-grey" size="large" style="background-color: #607d8b; color: white;") 
			i.fas.fa-sun.fa-2x.mr2
			| Pressed for Time

</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
	name: 'home',
	components: {
		HelloWorld
	}
}
</script>

<style>
.home {
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
}