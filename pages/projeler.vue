<template>
	<div class="flex gap-[32px] h-full min-h-0 max-[800px]:flex-col max-[800px]:min-h-[450px]">
		<PagesNav selected="projeler" />
		<div
			class="w-full overflow-y-auto h-full flex flex-col gap-[64px] max-[800px]:p-[32px] p-[64px] bg-[#0f0f0f]/60 border border-white/10 backdrop-blur-[100px] rounded-[10px]"
		>
			<div class="h-fit w-full flex gap-[64px] max-[990px]:flex-col max-[995px]:gap-[32px]">
				<h1 class="text-[30px] font-medium">HQLauncher</h1>
				<div class="flex flex-col gap-[16px] max-[995px]:gap-[32px]">
					<p class="text-[18px]">
						A functional Minecraft launcher with several features and beautiful
						UI. <br />
						Work in progress. Not available for download yet.
					</p>
					<div class="flex gap-[32px]">
						<NuxtLink
							to="/posts/hqlauncher"
							class="flex gap-[8px] place-items-center hover:scale-95 active:scale-50 duration-200 cursor-pointer"
						>
							<p class="text-[13px]">Learn More</p>
							<nuxt-icon name="link" />
						</NuxtLink>
						<NuxtLink
							to="#"
							class="flex gap-[8px] place-items-center hover:scale-95 active:scale-50 duration-200 cursor-pointer"
						>
							<p class="text-[13px]">Website</p>
							<nuxt-icon name="link" />
						</NuxtLink>
					</div>
				</div>
			</div>
			<div class="h-screen max-[800px]:hidden"></div>
		</div>
	</div>
</template>

<script setup>
useSeoMeta({
	title: "Projeler",
	ogTitle: "Projeler",
	description:
		"Ben Batuhan. Web Uygulamaları, Masaüstü Uygulamaları ve Elektronikte Başarılıyım, çok yönlü birisiyim",
	ogDescription:
		"Ben Batuhan. Web Uygulamaları, Masaüstü Uygulamaları ve Elektronikte Başarılıyım, çok yönlü birisiyim",
	ogImage: "/seoCover.png",
	twitterCard: "summary_large_image",
});
</script>
