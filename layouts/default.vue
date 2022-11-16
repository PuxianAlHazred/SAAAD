<template>
  <main :class="{'isDesktop': this.$device.isDesktop, 'isMobile': this.$device.isMobile, 'isTablet': this.$device.isTablet,}">
    <Ui-preloading />
    <Ui-header />
    <Nuxt class="frame"/>
  </main>
</template>
<style lang="postcss">
  main { @apply bg-black; }
  .frame {
    margin: 0 50px 0 150px;
    overflow: hidden;
  }
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
      },
    },
    mounted() {
      this.$gsap.config({nullTargetWarn: false, trialWarn: false});
      this.enter();
   
    }
  }
</script>
