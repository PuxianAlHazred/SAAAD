<template>
  <aside id="aside-menu"  @click="actMenu()">
    <transition name="component_transition" mode="in-out" tag="div" v-on:before-enter="afterEnter"  v-on:before-leave="beforeLeave">
      <div v-show="this.$store.state.menu" key="content">
        <nuxt-link to="/last-news">last news</nuxt-link>
        <nuxt-link to="/events">events</nuxt-link>
        <nuxt-link to="/works">works</nuxt-link>
        <nuxt-link to="/">contact</nuxt-link>
      </div>
    </transition>
  </aside>  
</template>
<style lang="postcss" scooped>
  #aside-menu { @apply ease-linear left-0 top-0 fixed transition-all duration-1000 z-[1000]  w-full ;  }
  #aside-menu div{ @apply bg-white flex flex-col items-center justify-center  h-screen  w-full ;  }
  #aside-menu a{ @apply font-hoefler text-black text-6xl tracking-wider font-light ;}
  #aside-menu a:hover{ filter:url(#pixelateMin); }
</style>
<script>
  import {mapActions} from 'vuex'
  export default {
    methods: {
      ...mapActions({ 
        actMenu: 'actMenu',
      }),
      afterEnter(el) {
        this.$gsap.to(".main-header", { duration: 0.5, width: "100%"});
        this.$gsap.to(".main-header button", { duration: 0.5, opacity: "0"});
        this.$gsap.to(".main-logo", { duration: 0.5, marginLeft: "0rem"});
        this.$gsap.to(".ambianceEffect", { duration: 0.5, scale: "3", filter:"url(#pixelateMin)"});
      },
      beforeLeave(el) {
        this.$gsap.to(".main-header", { duration: 0.5, width: "150px"});
        this.$gsap.to(".main-header button", { duration: 0.5, opacity: "1"});
        this.$gsap.to(".main-logo", { duration: 0.5, marginLeft: "2.5rem"});
        this.$gsap.to(".ambianceEffect", { duration: 0.5, scale: "1", filter:"none"});      
      },
      animateOnScroll() {
      },
    },
    mounted() {
    }
  }
</script>
  