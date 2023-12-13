<template>
	<button 
		@click="togglerHandler"
		class="text-gray-100 dark:md:text-[#9ca3af] md:text-[#075985] font-medium text-left active:scale-[.85] duration-300 flex gap-2 items-center md:flex-row-reverse">
		<i v-if="isDarkToggle" class="fas fa-sun"></i>
		<i v-else class="fas fa-moon"></i>
		{{ isDarkToggle ? 'Dark Mode' : 'Light Mode' }}
	</button>
</template>

<script setup>

import { computed, ref } from 'vue'

const isDarkToggle = ref(false)
const togglerHandler = () => {
	setTimeout(() => {
		isDarkToggle.value = !isDarkToggle.value
		document.querySelector('html').classList.toggle('dark')
	}, 300)
}

</script>
