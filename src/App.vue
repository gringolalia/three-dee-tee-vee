<template lang="pug">
#app
	#nav
		vk-navbar.with.dignity
			vk-navbar-nav(slot='center-left')
				vk-navbar-nav-item(title='Sobre Pobres' href="/about")
				vk-navbar-nav-dropdown(title='Double Binds')
					vk-navbar-nav-dropdown-nav
						vk-nav-item(title='Swaps')
						vk-nav-item(title='Options' active)
						vk-nav-item(title='Swaptions')
						vk-nav-item(title='Cooptions')
						vk-nav-item(title='Futures')
						vk-nav-item(title='Forwards')
						vk-nav-item(title='Credit Default')
						vk-nav-item(title='Collateralized Debt')
			vk-navbar-logo.dignity(slot='center') 
				i.fas.fa-sun.fa-2x.uk-margin-small-right
				| Engenho Novo LLP
			vk-navbar-nav(slot='center-right')
				vk-navbar-nav-item(title='Center Right')

			vk-navbar-nav(slot='center-right')
				vk-navbar-nav-item(title='Right Wing')
	router-view
		
		
</template>

<style>

@import "../node_modules/uikit/dist/css/uikit.css";
@import "../public/custom/customary.css";

body, html, .dignity {
	font-family: 'News Cycle', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
</style>
