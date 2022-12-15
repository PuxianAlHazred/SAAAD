<template>
  <aside id="aside-menu">
    <transition name="menu" mode="in-out" tag="div" v-on:before-enter="enter" v-on:before-leave="leave">
      <div v-show="this.$store.state.menu" key="content" class="texture-noise">
        <nuxt-link to="/works">releases</nuxt-link>
        <nuxt-link to="/events" >events</nuxt-link>
        <nuxt-link to="/">contact</nuxt-link>
      </div>
    </transition>

  </aside>  
</template>
<style lang="postcss" scooped>
  #aside-menu { @apply ease-linear left-0 top-0 fixed z-[1000] w-full; }
  #aside-menu div{ @apply bg-black flex flex-col items-center justify-center h-screen w-full; }
  #aside-menu a{ @apply font-hoefler text-white text-6xl tracking-wider font-light transition-all; clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);}
  #aside-menu a:hover{ filter:url(#pixelateMin); }
</style>
<script>
  import {mapActions, Store} from 'vuex'
  export default {
    asyncData() {
      return {
        name: (process.server ? 'server' : 'client')
      }
    },
    methods: {
      ...mapActions({ 
        actMenu: 'actMenu',
        actSecret: 'actSecret',
      }),
      enter(el) {
        this.$gsap.utils.toArray("#aside-menu a").forEach((e,i) => {
          this.$gsap.to(e, {delay:"0."+i+"00", duration: 0.2, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'})
        });
        this.$gsap.to(".ambianceEffect", { delay: 0.2, duration: 0.5, opacity: 0.5, filter:"url(#pixelateMin)"});
      },
      leave(el) {
        this.$gsap.utils.toArray("#aside-menu a").forEach((e,i) => {
          this.$gsap.to(e, {delay:"0."+i+"00", duration: 0.2, clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)'})
        });
        this.$gsap.to(".ambianceEffect", { delay: 0.8, duration: 1, opacity: 1, filter:"none"});      
      },
      onClick() {
        const STORE = this.$store
        function tglMenu(e) { e.addEventListener("click", function() { STORE.commit('tglMenu') }); } 
        document.querySelectorAll('#aside-menu a').forEach(tglMenu);
      },
    },
    mounted() {
      this.onClick();
    }
  }
</script>
  