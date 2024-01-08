<template>
	<section id="about"
		class="py-8 bg-gradient-to-b from-indigo-50 to-indigo-50 px-8 md:px-20 dark:from-[#111827] dark:to-[#111827] text-[#09090b] dark:text-[#f8fafc]">
		<h1 data-aos="fade-up" class="mb-8 text-3xl text-center text-[#374151] font-bold dark:text-[#9ca3af]">About Me</h1>
		<p data-aos="fade-up" class="md:text-center md:mx-auto">
			Hi, My name is Muhammad Adam Firdaus, from Sumedang, West Java Province, Indonesia. <br>
			I am a UI/UX Designer and Front-End Enthusiast.
		</p>

		<section class="mt-6 w-full justify-between flex flex-wrap lg:justify-center  gap-6 md:mt-10 gap-6">
			<div class="md:w-5/12 ">
				<h2 data-aos="zoom-in" class="mb-5 font-medium md:text-center text-[#374151] text-xl dark:text-[#9ca3af]">
					Educations</h2>
				<div>
					<template v-for="(edu, x) in educations" :key="x">
						<div data-aos="zoom-in"
							class="mb-3 border-l-4 border-[#075985] dark:border-[#38bdf8] rounded py-2 pl-3">
							<span class="flex items-center gap-3">
								<i class="fas fa-building text-[#075985] dark:text-[#38bdf8]"></i>
								<p class="font-bold text-[#09090b] dark:text-[#f8fafc]">{{ edu.job }}</p>
							</span>
							<p class="font-medium text-[#09090b] dark:text-[#f8fafc]">{{ edu.institusi }}</p>
							<small>{{ edu.tahun }}</small>
						</div>
					</template>
				</div>
			</div>


			<div class="md:w-5/12">
				<h2 data-aos="zoom-in" class="mb-5 md:text-center font-medium text-[#374151] text-xl dark:text-[#9ca3af]">
					Skills</h2>
				<ul>
					<template v-for="(skil, x) in skils" :key="x">
						<li data-aos="zoom-in"
							class="mb-3 border-l-4 border-[#075985] dark:border-[#38bdf8] rounded py-2 pl-3 font-medium text-[#09090b] dark:text-[#f8fafc]">
							{{ skil }}</li>
					</template>
				</ul>
			</div>

			<div class="md:w-5/12">
				<h2 data-aos="zoom-in" class="mb-5 md:text-center font-medium text-[#374151] text-xl dark:text-[#9ca3af]">
					Experience</h2>
				<div>
					<template v-for="(exper, x) in expers" :key="x">
						<div data-aos="zoom-in"
							class="mb-3 border-l-4 border-[#075985] dark:border-[#38bdf8] rounded py-2 pl-3 font-medium text-gray-700 dark:text-gray-300">
							<span class="flex items-center gap-3">
								<i class="fas fa-building text-[#075985] dark:text-[#38bdf8]"></i>
								<p class="font-bold text-[#09090b] dark:text-[#f8fafc]">{{ exper.job }}</p>
							</span>
							<p class="font-medium text-[#09090b] dark:text-[#f8fafc]">{{ exper.institusi }}</p>
							<small>{{ exper.year }}</small>
						</div>
					</template>
				</div>
			</div>

			<div class="lg:w-5/12">
				<h2 data-aos="zoom-in"
					class="mb-5 md:text-center lg:mb-10 font-medium text-[#374151] text-xl dark:text-[#9ca3af]">Languages
					& Tools</h2>
				<ul class="flex flex-wrap justify-between md:justify-center gap-5 md:gap-8">
					<template v-for="(tool, x) in tools" :key="x">
						<li data-aos="zoom-in" class="w-2/12 md:w-1/12">
							<img :src="tool" class="w-full lg:w-10/12 opacity-75" :alt="tool" />
						</li>
					</template>
				</ul>
			</div>

		</section>
	</section>
</template>

<script setup>
import educations from '@/contents/educations.js'
import skils from '@/contents/skils.js'
import expers from '@/contents/expers.js'
import tools from '@/contents/tools.js'
</script>
