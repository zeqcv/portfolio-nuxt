<template>
	<div
		class="flex gap-[32px] min-h-0 max-[800px]:flex-col max-[800px]:min-h-[450px]"
	>
		<PagesNav selected="hakkimda" />
		<div
			class="w-full overflow-hidden h-full flex bg-[#0f0f0f]/60 border border-white/10 backdrop-blur-[100px] rounded-[10px] max-[800px]:overflow-y-auto"
		>
			<div
				class="flex flex-col place-content-between max-[800px]:place-content-start gap-[64px] p-[64px] max-[800px]:p-[32px] h-full w-full"
			>
				<div class="flex flex-col gap-[32px] h-fit w-full">
					<h1 class="text-[40px] font-medium">Hakkımda</h1>
					<p class="text-[18px] leading-[225%]">
						Web Uygulamaları , Web Siteleri , Backend Projeleri , Elektronik Projeleri , Elektrik Projeleri , Robot Altyapıları , Elektronik Yazılımları gibi konularda başarılıyım, ayrıca Oyun Sununucu Hizmetleri ve Oyun Araçları konusunda çalışmalarım bulunmakta...
					</p>
				</div>
				<div class="h-screen max-[800px]:hidden"></div>
				<div class="flex place-content-between h-fit w-full">
					<nuxt-link
						to="/iletisim"
						class="flex gap-[8px] place-items-center hover:scale-95 active:scale-50 duration-200 cursor-pointer"
					>
						<p class="text-[18px] font-medium">Benimle İletişime Geç</p>
						<nuxt-icon name="link" />
					</nuxt-link>
					<button
						@click="openModal"
						class="text-[18px] font-medium hover:scale-95 active:scale-50 duration-200 cursor-pointer"
					>
						Yeteneklerimi Gör
					</button>
				</div>
			</div>
			<nuxt-img
				src="/about.png"
				format="webp"
				fit="contain"
				loading="lazy"
				class="w-[50%] min-[1800px]:min-w-[950px] max-[1300px]:hidden object-cover h-screen"
			/>
		</div>
	</div>
	<TransitionRoot appear :show="isOpen" as="template">
		<Dialog as="div" @close="closeModal" class="relative z-10">
			<TransitionChild
				as="template"
				enter="duration-300 ease-out"
				enter-from="opacity-0"
				enter-to="opacity-100"
				leave="duration-200 ease-in"
				leave-from="opacity-100"
				leave-to="opacity-0"
			>
				<div
					class="fixed inset-0 bg-black backdrop-blur-sm bg-opacity-25"
				></div>
			</TransitionChild>

			<div class="fixed inset-0 overflow-y-auto">
				<div
					class="flex min-h-full items-center justify-center p-[32px] text-center"
				>
					<TransitionChild
						as="template"
						enter="duration-300 ease-out"
						enter-from="opacity-0 scale-95"
						enter-to="opacity-100 scale-100"
						leave="duration-200 ease-in"
						leave-from="opacity-100 scale-100"
						leave-to="opacity-0 scale-95"
					>
						<DialogPanel
							class="w-fit transform overflow-hidden rounded-[10px] text-white bg-[#0f0f0f]/60 backdrop-blur-[50px] border-2 border-white/10 p-[32px] text-left align-middle transition-all flex flex-col gap-[16px]"
						>
							<DialogTitle
								as="h3"
								class="text-[28px] font-medium leading-6 text-white"
							>
								Yeteneklerim
							</DialogTitle>
							<div class="flex flex-col gap-[16px]">
								<p class="text-[18px]">Araçlar ve Yazılımlar</p>
								<div class="flex flex-wrap gap-[16px] h-fit">
									<nuxt-img
										v-tooltip="'AutoDesk'"
										width="32"
										height="32"
										src="/icons/skills/autodesk.svg"
									/>
									<nuxt-img
										v-tooltip="'Arduino'"
										width="32"
										height="32"
										src="/icons/skills/arduino.svg"
									/>
									<nuxt-img
										v-tooltip="'After Effects'"
										width="32"
										height="32"
										src="/icons/skills/ae.svg"
									/>
									<nuxt-img
										v-tooltip="'Photoshop'"
										width="32"
										height="32"
										src="/icons/skills/ps.svg"
									/>
									<nuxt-img
										v-tooltip="'Visual Studio Code'"
										width="32"
										height="32"
										src="/icons/skills/vscode.svg"
									/>
									<nuxt-img
										v-tooltip="'Git'"
										width="32"
										height="32"
										preload
										src="/icons/skills/git.svg"
									/>
									<nuxt-img
										v-tooltip="'Jetbrains IDEs'"
										width="32"
										height="32"
										src="/icons/skills/jetbrains.svg"
									/>
								</div>
								<p class="text-[18px]">Programlama Dilleri & Framework'ler</p>
								<div class="flex flex-wrap gap-[16px] h-fit">
									<nuxt-img
										v-tooltip="'Javascript'"
										width="32"
										height="32"
										preload
										src="/icons/skills/js.svg"
									/>
									<nuxt-img
										v-tooltip="'Typescript'"
										width="32"
										height="32"
										src="/icons/skills/ts.svg"
									/>
									<nuxt-img
										v-tooltip="'Nuxt.js'"
										width="32"
										height="32"
										src="/icons/skills/nuxt.svg"
									/>
									<nuxt-img
										v-tooltip="'Vue.js'"
										width="32"
										height="32"
										src="/icons/skills/vue.svg"
									/>
									<nuxt-img
										v-tooltip="'Laravel'"
										width="32"
										height="32"
										src="/icons/skills/laravel.svg"
									/>
									<nuxt-img
										v-tooltip="'PHP'"
										width="32"
										height="32"
										src="/icons/skills/php.svg"
									/>
									<nuxt-img
										v-tooltip="'HTML'"
										width="32"
										height="32"
										src="/icons/skills/html.svg"
									/>
									<nuxt-img
										v-tooltip="'Node.js'"
										width="32"
										height="32"
										src="/icons/skills/nodejs.svg"
									/>
								</div>
							</div>
						</DialogPanel>
					</TransitionChild>
				</div>
			</div>
		</Dialog>
	</TransitionRoot>
</template>

<script setup>
import {
	TransitionRoot,
	TransitionChild,
	Dialog,
	DialogPanel,
	DialogTitle,
} from "@headlessui/vue";

const isOpen = ref(false);

function closeModal() {
	isOpen.value = false;
}

function openModal() {
	isOpen.value = true;
}
useSeoMeta({
	title: "Hakkımda",
	ogTitle: "Hakkımda",
	description:
		"Ben Batuhan. Web Uygulamaları, Masaüstü Uygulamaları ve Elektronikte Başarılıyım, çok yönlü birisiyim",
	ogDescription:
		"Ben Batuhan. Web Uygulamaları, Masaüstü Uygulamaları ve Elektronikte Başarılıyım, çok yönlü birisiyim",
	ogImage: "/seoCover.png",
	twitterCard: "summary_large_image",
});
</script>
