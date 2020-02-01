<template lang="pug">
.home
	img(alt='Vue logo' src='../assets/logo.png')
	h1 Addio Mondo Crudele
	vk-button(type="primary") Press Me For Time 
		
		
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
