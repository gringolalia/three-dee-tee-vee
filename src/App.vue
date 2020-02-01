<template lang="pug">
#app
	#nav
		vk-navbar
			vk-navbar-nav(slot='center-left')
				vk-navbar-nav-item(title='Active' active)
				vk-navbar-nav-dropdown(title='Double Bind')
					vk-navbar-nav-dropdown-nav
						vk-nav-item(title='Active' active)
						vk-nav-item(title='Item')
						vk-nav-item(title='Item')
			vk-navbar-logo(slot='center') Engenho Novo LLP
			vk-navbar-nav(slot='center-right')
				vk-navbar-nav-item(title='Item')
	router-view
		
		
</template>

<style lang="scss" scoped>
#app {
	font-family: 'News Cycle', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

#nav {
	padding: 30px;

	a {
		font-weight: bold;
		color: #2c3e50;

		&.router-link-exact-active {
			color: #42b983;
		}
	}
}
</style>
