<style scoped>

	.input {
		@apply text-sm text-gray-700 dark:bg-slate-200 bg-gray-50 py-4 w-10/12 pl-1 focus:pl-3 duration-300;
	}

</style>
<template>
	<section id="contact" class="py-8 bg-gradient-to-b from-indigo-50 to-gray-50 px-8 md:px-20 dark:from-[#111827] dark:to-[#18181b]">
		<h1 data-aos="fade-up" class="mb-8 text-3xl text-center text-[#374151] font-bold dark:text-[#9ca3af]">Contact</h1>
		<p data-aos="fade-up" class="md:text-center md:mx-auto dark:text-[#f8fafc] text-[#09090b]">
			contact me if there is a job you want to offer or just ask about me
		</p>
		<section class="w-full text-gray-100 text-xl gap-5 mt-5">
			<div class="flex w-full gap-3 md:w-7/12 md:mx-auto lg:justify-center">
				<template v-for="(contact, x) in contacts" :key="x">
					<a data-aos="zoom-in" :href="!contact.mailto ? contact.link : 'mailto:' + contact.link"
					class="w-48 bg-gradient-to-r from-[#bae6fd] to-[#38bdf8] dark:from-[#0284c7] dark:to-[#0c4a6e] grid place-items-center py-4 rounded duration-300 text-[#374151] dark:text-[#f8fafc]">
						<i :class="contact.icon"></i>
					</a>
				</template>
			</div>
		</section>
		<br>
		<p data-aos="zoom-in" class="md:text-center md:mx-auto dark:text-[#f8fafc] text-[#09090b]">Copyright <span>&#169;</span> 2023 damnnson</p>
	</section>
</template>

<script setup>

	import contacts from '@/contents/contacts.js'
	import { ref } from 'vue'

</script>
