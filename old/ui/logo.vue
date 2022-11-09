<template>
    <NuxtLink to="/"><h1>Saåad</h1></NuxtLink>
</template>
<style lang="postcss">
  h1 {@apply mix-blend-difference w-[500px] h-[500px] border-white border-[1px] rounded-full fixed z-50 text-4xl font-work}
</style>
<script>
export default {
  methods: {
    scrollLogo() {
        this.$gsap.to(".logo-theme h1", {delay: 2.5, duration:0.5, width: '150px',  height: '150px', fontSize: '2.5rem',ease:"power2.easeOut", stagger: 0.1}, "+=0");
    },
  },
  created() {
  },
  mounted() {
    this.scrollLogo();
    if(this.$store.state.preloading === false) {
      //console.log("IORE 1")
    } else {
      //console.log("IORE 2")
    }
  }
}
</script>
