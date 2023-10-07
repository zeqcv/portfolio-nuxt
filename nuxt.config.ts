// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: {enabled: false},
	modules: [
		"@nuxtjs/tailwindcss",
		"@nuxt/image",
		"nuxt-icons",
		"@nuxt/content",
		"floating-vue/nuxt",
	],
	app: {
		head: {
			charset: "utf-8",
			viewport: "width=device-width, initial-scale=1",
		},
	},
});
