<template>
	<div class="flex gap-[32px] min-h-0 max-[800px]:flex-col max-[800px]:min-h-[450px]">
		<PagesNav selected="anasayfa" />
		<div
			class="w-full overflow-y-auto flex flex-col h-full p-[32px] bg-[#0f0f0f]/60 border border-white/10 backdrop-blur-[100px] rounded-[10px]"
		>
			<div
				class="grid grid-cols-3 max-[1270px]:grid-cols-2 max-[1000px]:grid-cols-1 gap-[24px]"
			>
				<ContentList path="/posts" v-slot="{list}">
					<NuxtLink
						v-for="post in list"
						:key="post._path"
						:to="post._path"
						:style="{ 'backgroundImage': `linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,0.5)),url(${post.img})` }"
						class="bg-cover hover:scale-[.98] cursor-pointer active:scale-75 transition-all duration-200 bg-no-repeat bg-clip-padding rounded-[10px] border border-white/10 w-full h-[400px] flex flex-col gap-[8px] p-[32px] align-bottom place-content-end group"
					>
						<h2
							class="text-[30px] font-medium opacity-0 max-[800px]:opacity-100 group-hover:opacity-100 duration-200 transition-all w-full"
						>
							{{ post.title }}
						</h2>
						<p
							class="text-[18px] opacity-0 max-[800px]:opacity-70 group-hover:opacity-70 duration-200 transition-all w-full"
						>
							{{ post.type }} - {{ post.date }}
						</p>
					</NuxtLink>
				</ContentList>
			</div>
			<div class="h-screen max-[800px]:hidden"></div>
		</div>
	</div>
</template>

<script setup>
useSeoMeta({
	title: "Anasayfa",
	ogTitle: "Anasayfa",
	description:
		"Ben Batuhan. Web Uygulamaları, Masaüstü Uygulamaları ve Elektronikte Başarılıyım, çok yönlü birisiyim",
	ogDescription:
		"Ben Batuhan. Web Uygulamaları, Masaüstü Uygulamaları ve Elektronikte Başarılıyım, çok yönlü birisiyim",
	ogImage: "/seoCover.png",
	twitterCard: "summary_large_image",
});
</script>
