<template>
	<section id="uiux"
		class="py-8 bg-gradient-to-b from-indigo-50 to-indigo-50 px-8 md:px-20 dark:from-[#111827] dark:to-[#111827]">
		<h1 data-aos="fade-up" class="mb-8 text-3xl font-bold text-center text-[#374151] dark:text-[#9ca3af]">
			Projects
		</h1>
		<p data-aos="fade-up" class="mb-8 md:text-center md:mx-auto dark:text-[#f8fafc] text-[#09090b]">
			This section is the result of the works that I have made so far, Hope you enjoy:
		</p>
		<h4 data-aos="fade-up" class="mb-8 text-2xl font-bold text-center text-[#075985] dark:text-[#38bdf8]">
			UI/UX Designer
		</h4>


		<section class="mt-4 md:flex-nowrap mx-auto md:flex gap-5 flex-wrap">
			<template v-for="(ux, x) in currentPage" :key="x">
				<Cui :content="ux" />
			</template>
		</section>

		<section data-aos="fade-up" class="text-indigo-700 flex justify-end text-xl gap-5">
			<button @click="actionPage(false)"
				:class="indicatorPage === 0 ? 'bg-[#09090b] dark:bg-[#f8fafc] px-3 text-[#9ca3af]' : 'bg-indigo-900 px-5'"
				class="active:scale-75 duration-300 rounded py-2 grid place-items-center">
				<i class="fa fa-chevron-left"></i>
			</button>
			<button @click="actionPage(true)"
				:class="indicatorPage === lengthPage - 1 ? 'bg-[#09090b] dark:bg-[#f8fafc] px-3 text-[#9ca3af]' : 'bg-indigo-200 px-5'"
				class="active:scale-75 duration-300 rounded py-2 grid place-items-center">
				<i class="fa fa-chevron-right"></i>
			</button>
		</section>
		<div data-aos="fade-up" class="mt-2 text-right">
			<small class="text-sm dark:text-gray-300">page {{ indicatorPage + 1 }} of {{ lengthPage }}</small>
		</div>
	</section>
</template>

<script setup>

import Cui from '@/components/Cui.vue'
import ui from '@/contents/ui.js'
import { ref } from 'vue'

const divideCard = 4
const pages = []	
let loop = Math.floor(ui.length / divideCard)

for (let x = 0; x <= loop; x++) {
	if (ui.length > 0) pages.push(ui.splice(0, divideCard))
}

const indicatorPage = ref(0)
const currentPage = ref(pages[indicatorPage.value])
const lengthPage = pages.length

const actionPage = next => {
	if (next) {
		if (indicatorPage.value < lengthPage - 1) indicatorPage.value++
	} else {
		if (indicatorPage.value > 0) indicatorPage.value--
	}

	currentPage.value = pages[indicatorPage.value]
}

</script>
