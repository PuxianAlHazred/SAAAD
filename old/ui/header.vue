<template>
  <header class="main-nav">
    <Ui-logo class="logo-theme" />
    <transition name="fade" mode="in-out" v-on:before-leave="beforeLeave()" v-on:after-enter="afterEnter()">
      <div v-if="this.$store.state.menu" class="absolute">
        <ul v-show="content" class=" text-5xl text-center font-english">
            <li class="mb-5 text-white menu-link" >
              <NuxtLink to="/">TOUR</NuxtLink>
            </li>
            <li class="mb-5 text-white menu-link" >
              <NuxtLink to="/">DISCOGRAPHY</NuxtLink>
            </li>
            <li class="mb-5 text-white menu-link" >
              <NuxtLink to="/">PROJECT</NuxtLink>
            </li>
            <li class="text-[#303030] menu-link" >
              <NuxtLink to="/">CONTACT</NuxtLink>
            </li>
        </ul>
      </div>
    </transition>
    <Ui-menu class="menu-theme" />
    <!--<Projects-lightEffect />-->
  </header>
</template>
<style lang="postcss" scooped>
  header{
     @apply fixed top-0 left-0 w-full h-screen justify-between bg-black flex items-center overflow-hidden border-b-[1px] border-white z-[100] transform transition-all duration-1000;
  }
  header .full-menu{
     @apply justify-center ;
  }
  .logo-theme{
     @apply text-white relative left-0 translate-x-0 transform transition-all duration-1000 font-garamond leading-[100px] text-[25px];
  }
  .menu-theme{
     @apply text-white ;
  }
  .logoMini{
    left: -50%!important;
    transform:translateX(50%)!important;
  }

</style>
<script>
export default {
  data() {
    return {
      content: false,
    }
  },
  methods: {
    afterEnter(el) {
      this.content = true
      var t1 = this.$gsap.timeline(), mySplitText = new SplitType(".menu-link", {type:"words,chars"}), chars = mySplitText.chars;
          t1.from(chars, {delay: 0, duration:0.5, opacity:0, y:-10,  ease:"power2.easeOut", stagger: 0.2}, "+=1");
    },
    beforeLeave(el) {
      this.content = false
    },
    animateOnScroll() {
    },
  },
  mounted() {
    this.animateOnScroll();
  }
}
</script>
