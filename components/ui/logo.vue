<template>
  <NLink to="/" class="main-logo">
    <h1>Saåad</h1>
  </NLink>
</template>
<style lang="postcss">
  .main-logo { 
    @apply 
    opacity-0 
    ml-10 
    text-white 
    font-light 
    flex 
    items-center 
    justify-center 
    w-[150px] 
    h-[150px] 
    border-white 
    border-[1px] 
    rounded-full 
    z-50 
    text-[35px] 
    font-hoefler;
  }
</style>
<script>
export default {
methods: {
  scrollLogo() {
      this.$gsap.to(".main-logo", {duration:0.5, opacity: '1',ease:"power2.easeOut", stagger: 0.1}, "+=0");
  },
},
created() {
},
mounted() {
  this.scrollLogo();
}
}
</script>
