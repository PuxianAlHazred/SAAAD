<template>
  <main :class="{'isDesktop': this.$device.isDesktop, 'isMobile': this.$device.isMobile, 'isTablet': this.$device.isTablet,}">
    <Ui-preloading v-if="this.$store.state.preloading"/>
    <Ui-header />
    <ui-booking />
    <projects-secret />
    <Nuxt v-if="this.$store.state.content" class="w-wSaaad my-0 ml-[150px] mr-[50px]"/>
  </main>
</template>
<style lang="postcss">
  html { scroll-behavior: smooth; }
  main { @apply bg-black; }
</style>
<script>
  export default {
    data () {
      return {
        menu: false
      }
    },
    methods: {
      enter() {
        console.log( `%c SAAAD %c layout/default.vue %c 📓 Layout mounted 🟢"`, 'background:#FFF000 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #000000', 'background:#000000 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #ffffff', 'background:transparent')
      }
    },
    mounted() {
      this.$gsap.config({nullTargetWarn: false, trialWarn: false});
      this.enter();
    },
  }
</script>
