<template>
	<main class="app">
		<Navbar v-on:change-menu="changeMenu" />
		<main class="mt-16">
			<Landing ref="home" />
			<About />
			<Uiux />
			<Frontend />
			<Graphic />
			<Contact />
		</main>
	</main>
</template>

<script setup>

import { ref } from 'vue'
import Landing from '@/components/Landing.vue'
import About from '@/components/About.vue'
import Navbar from '@/components/Navbar.vue'
import Uiux from '@/components/Uiux.vue'
import Frontend from '@/components/Frontend.vue'
import Graphic from '@/components/Graphic.vue'
import Contact from '@/components/Contact.vue'

const home = ref(null)

const changeMenu = payload => {
	getEl(payload).scrollIntoView({
		behavior: 'smooth',
		block: 'start',
		inline: 'nearest'
	})
}

const getEl = id => document.querySelector(id)
</script>

<style scoped>
.app {
	@apply w-full;
}
</style>
