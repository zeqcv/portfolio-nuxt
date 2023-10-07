<template>
	<div class="flex gap-[32px] min-h-0 w-full max-[800px]:flex-col max-[800px]:min-h-[450px]">
		<PagesNav selected="none" />
		<div
			class="w-full overflow-y-auto flex align-middle place-content-center overflow-x-hidden p-[32px] bg-[#0f0f0f]/60 border border-white/10 backdrop-blur-[100px] rounded-[10px]"
		>
			<article
				class="prose lg:prose-xl prose-img:rounded-[10px] prose-h1:text-white prose-h2:text-white prose-h3:text-white prose-h4:text-white prose-h6:text-white prose-p:text-[#e1e1e1] prose-a:text-white prose-a:no-underline hover:prose-a:text-white prose-code:text-[#b3b3b3] prose-li:text-[#e1e1e1] prose-ul:text-[#e1e1e1] prose-blockquote:text-[#e1e1e1]"
			>
				<ContentDoc />
			</article>
			<div class="h-screen"></div>
		</div>
	</div>
</template>

<script setup>
useSeoMeta({
	title: "Gönderiler",
	ogTitle: "Gönderiler",
	description:
		"Ben Batuhan. Web Uygulamaları, Masaüstü Uygulamaları ve Elektronikte Başarılıyım, çok yönlü birisiyim",
	ogDescription:
		"Ben Batuhan. Web Uygulamaları, Masaüstü Uygulamaları ve Elektronikte Başarılıyım, çok yönlü birisiyim",
	ogImage: "/seoCover.png",
	twitterCard: "summary_large_image",
});

definePageMeta({
	layout: "post",
});
</script>
