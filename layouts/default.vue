<script>
import {gsap} from "gsap";

export default {
	mounted() {
		gsap.fromTo(
			this.$refs.header,
			{autoAlpha: 0, y: -100},
			{autoAlpha: 1, y: 0, duration: 0.87, ease: "power4.inOut"}
		);
	},
};
</script>

<template>
	<div
		class="bg-transparent text-white p-[64px] max-[800px]:px-[32px] h-screen min-h-screen overflow-y-hidden overflow-x-hidden flex flex-col gap-[64px] z-10 max-[800px]:overflow-y-scroll"
	>
		<nav
			class="flex place-content-between h-fit w-full align-middle place-items-center"
		>
			<nuxt-link to="/"
				><nuxt-img
					class="hover:scale-95 active:scale-50 duration-200"
					src="/blogo.svg"
					width="24"
			/></nuxt-link>
			<Status type="No" />
		</nav>
		<div class="min-h-0 w-full flex max-[800px]:flex-col gap-[64px]">
			<div id="left" class="w-full h-full flex flex-col gap-[64px]">
				<div class="flex flex-col gap-[32px]">
					<h1
						class="font-hanson text-[100px] max-[800px]:text-[75px] leading-[50%] opacity-0"
						ref="header"
					>
						batuhan
					</h1>
					<!-- <p class="text-[20px]">UI designer, & front-end web developer.</p> -->
				</div>
				<slot />
			</div>
			<div
				id="right"
				class="w-fit h-full max-[800px]:h-fit max-[800px]:hidden max-[800px]:w-full flex flex-col gap-[32px] align-middle place-items-center"
			>
				<div class="flex min-[800px]:flex-col gap-[16px]">
					<!-- <NuxtLink
						to="https://bento.me/dukc"
                        target="_blank"
						class="hover:scale-95 active:scale-50 duration-200"
					>
						<nuxt-img width="36" src="/icons/bento.svg" />
					</NuxtLink>
					<NuxtLink
						to="https://www.youtube.com/@dukkcc"
                        target="_blank"
						class="hover:scale-95 active:scale-50 duration-200"
					>
						<nuxt-img width="36" src="/icons/yt.svg" />
					</NuxtLink>
					<NuxtLink
						to="https://www.behance.net/duckyhq"
                        target="_blank"
						class="hover:scale-95 active:scale-50 duration-200"
					>
						<nuxt-img width="36" src="/icons/behance.svg" />
					</NuxtLink> -->
					<NuxtLink
						to="https://discord.com/users/874626830001385483"
                        target="_blank"
						class="hover:scale-95 active:scale-50 duration-200"
					>
						<nuxt-img width="36" src="/icons/discord.svg" />
					</NuxtLink>
					<NuxtLink
						to="https://instagram.com/bathua.n"
                        target="_blank"
						class="hover:scale-95 active:scale-50 duration-200"
					>
						<nuxt-img width="36" src="/icons/instagram.svg" />
					</NuxtLink>
					<NuxtLink
						to="https://github.com/zeqcv"
                        target="_blank"
						class="hover:scale-95 active:scale-50 duration-200"
					>
						<nuxt-img width="36" src="/icons/github.svg" />
					</NuxtLink>
				</div>
				<div class="w-[1px] h-full border max-[800px]:hidden border-white/10"></div>
			</div>
		</div>
	</div>
	<div
		class="relative bottom-[70vh] left-[10vw] h-[30rem] w-[40rem] bg-gradient-to-tr animate-spin-slow from-brand-blue-1 to-brand-purple blur-[128px] rounded-full -z-10"
	></div>
	<div
		class="relative bottom-[90vh] left-[80vw] opacity-50 h-[40rem] w-[35rem] bg-gradient-to-tr animate-spin-slow from-brand-purple to-brand-purple blur-[128px] rounded-full -z-10"
	></div>
</template>
