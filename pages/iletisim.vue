<template>
	<div
		class="flex gap-[32px] min-h-0 max-[800px]:flex-col max-[800px]:min-h-[450px]"
	>
		<PagesNav selected="iletisim" />
		<div
			class="w-full overflow-hidden h-full flex bg-[#0f0f0f]/60 border border-white/10 backdrop-blur-[100px] rounded-[10px]"
		>
			<div
				class="flex flex-col place-content-between p-[64px] max-[800px]:p-[32px] h-full w-full"
			>
				<div class="flex flex-col gap-[32px] h-fit w-full">
					<h1 class="text-[40px] font-medium">İletişim</h1>
					<p class="text-[18px] leading-[225%]">
						<a href="mailto:batuaydemir.edu@gmail.com">Bana Mail Gönder...</a>
					</p>
				</div>
				<div class="h-screen max-[800px]:hidden"></div>
				<div class=" flex-col gap-[16px]">
					<p class="text-[18px]">Discord: zeqcv (zeqcv#0001)</p>
					<p class="text-[18px]">Email: batuaydemir.edu@gmail.com</p>
				</div>
			</div>
			<nuxt-img
				src="/contact.png"
				format="webp"
				fit="contain"
				loading="lazy"
				class="w-[50%] min-[1800px]:min-w-[950px] max-[1300px]:hidden object-cover h-screen"
			/>
		</div>
	</div>
</template>

<script setup>
useSeoMeta({
	title: "İletişim",
	ogTitle: "İletişim",
	description:
		"Ben Batuhan. Web Uygulamaları, Masaüstü Uygulamaları ve Elektronikte Başarılıyım, çok yönlü birisiyim",
	ogDescription:
		"Ben Batuhan. Web Uygulamaları, Masaüstü Uygulamaları ve Elektronikte Başarılıyım, çok yönlü birisiyim",
	ogImage: "/seoCover.png",
	twitterCard: "summary_large_image",
});
</script>
