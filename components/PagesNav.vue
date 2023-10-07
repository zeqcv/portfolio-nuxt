<template>
  <div
    class="w-fit h-full flex text-[17px] max-[950px]:text-[20px] min-[800px]:flex-col align-middle justify-center gap-[32px] p-[16px] bg-[#0f0f0f]/60 border border-white/10 backdrop-blur-[100px] rounded-[10px] max-[800px]:h-fit max-[800px]:w-full"
  >
    <NuxtLink to="/">
      <nuxt-icon name="anasayfa" v-tooltip="'Anasayfa'"
        :class="[
          {
            selected: anasayfa,
          },
          {
            'text-white': hakkimda,
          },
          {
            'text-white': projeler,
          },
          {
            'text-white': iletisim,
          },
          {
            'text-white': none,
          },
        ]"
      />
    </NuxtLink>
    <NuxtLink to="/hakkimda">
      <nuxt-icon
        name="hakkimda"
        v-tooltip="'Hakkımda'"
        :class="[
          {
            'text-white': anasayfa,
          },
          {
            selected: hakkimda,
          },
          {
            'text-white': projeler,
          },
          {
            'text-white': iletisim,
          },
          {
            'text-white': none,
          },
        ]"
      />
    </NuxtLink>
    <!-- <NuxtLink to="/projeler">
      <nuxt-icon
        name="projeler"
        v-tooltip="'Projeler'"
        :class="[
          {
            'text-white': anasayfa,
          },
          {
            'text-white': hakkimda,
          },
          {
            selected: projeler,
          },
          {
            'text-white': iletisim,
          },
          {
            'text-white': none,
          },
        ]"
      />
    </NuxtLink> -->
    <NuxtLink to="/iletisim">
      <nuxt-icon
        name="iletisim"
        v-tooltip="'İletişim'"
        :class="[
          {
            'text-white': anasayfa,
          },
          {
            'text-white ': hakkimda,
          },
          {
            'text-white': projeler,
          },
          {
            selected: iletisim,
          },
          {
            'text-white': none,
          },
        ]"
      />
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    selected: {
      type: String,
      default: "anasayfa",
    },
  },

  computed: {
    anasayfa() {
      return this.selected === "anasayfa";
    },
    hakkimda() {
      return this.selected === "hakkimda";
    },
    projeler() {
      return this.selected === "projeler";
    },
    iletisim() {
      return this.selected === "iletisim";
    },
    none() {
      return this.selected === "none";
    },
  },
};
</script>
