<style scoped>

	.input {
		@apply text-sm text-gray-700 dark:bg-slate-200 bg-gray-50 py-4 w-10/12 pl-1 focus:pl-3 duration-300;
	}

</style>
<template>
	<section id="contact" class="py-8 bg-gradient-to-b from-gray-50 to-indigo-50 px-8 md:px-20 dark:from-[#18181b] dark:to-[#18181b]">
		<h1 data-aos="fade-up" class="mb-8 text-3xl text-center text-indigo-700 font-bold dark:text-[#9ca3af]">Contact</h1>
		<p data-aos="fade-up" class="md:text-center md:mx-auto dark:text-gray-300">
			contact me if there is a job you want to offer or just ask about me
		</p>
		<section class="w-full text-gray-100 text-xl gap-5 mt-5">
			<div class="flex w-full gap-3 md:w-7/12 md:mx-auto lg:justify-center">
				<template v-for="(contact, x) in contacts" :key="x">
					<a data-aos="zoom-in" :href="!contact.mailto ? contact.link : 'mailto:' + contact.link"
					class="w-48 bg-gradient-to-r from-[#0284c7] to-[#38bdf8] grid place-items-center py-4 rounded duration-300">
						<i :class="contact.icon"></i>
					</a>
				</template>
			</div>
		</section>
	</section>
</template>

<script setup>

	import contacts from '@/contents/contacts.js'
	import { ref } from 'vue'

</script>
