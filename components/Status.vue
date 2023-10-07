<template>
	<div class="flex gap-[8px] align-middle place-items-center">
		<p class="text-[13px]">İş Durumum: <span v-if="type === 'No'">Çalışmıyorum</span><span v-if="type === 'Yes'">Çalışıyorum</span></p>
		<div
			:class="[
				{
					'w-[6px] h-[6px] bg-hq-green rounded-full': Yes,
				},
				{
					'w-[6px] h-[6px] bg-hq-red rounded-full': No,
				},
			]"
		></div>
	</div>
</template>

<script>
export default {
	props: {
		type: {
			type: String,
			default: "Yes",
		},
	},

	computed: {
		No() {
			return this.type === "No";
		},
		Yes() {
			return this.type === "Yes";
		},
	},
};
</script>
